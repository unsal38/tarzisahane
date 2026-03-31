// AXİOS POST FUNCTİON
function axios_post(url, data) {
    const base_url = window.location.origin
    let myPromise = new Promise(function (resolve, reject) {
        axios.post(`${base_url}/${url}`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        ).then((response) => {
            resolve(response)
        }).catch(err => console.log(err, "index js axios post"))
    });
    return myPromise
}
// AXİOS GET FUNCTİON
function axios_get(url) {
    const base_url = window.location.origin
    let myPromiseGet = new Promise(function (resolve, reject) {
        axios.get(`${base_url}${url}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        ).then((response) => {
            resolve(response)
        }).catch(err => console.log(err, "index js axiosget"))
    });
    return myPromiseGet
}
// AXİOS END

$(() => {
    $("#instagram_embed .owl-carousel").owlCarousel({
        nav: true,
        loop: true,
        margin: 10,
        navText: ['<i class="fa-solid fa-angles-left"></i>', '<i class="fa-solid fa-angles-right"></i>'],
        autoplay: true,
    });
}) // OWL CARUSEL
$(() => {
    $('#product .carousel-inner div:first-child').addClass('active')
    $('#trend_product .carousel-inner div:first-child').addClass('active')
}) // PRODUCT CORUSEL İLK ELEMENT ACTİVE CLASS EKLEME 
$(() => {
    function IntersectionObserver_img_data_src_change(targetElement, root, rootMargin, threshold) {
        const options = {
            root, // defaults to the browser viewport
            rootMargin, // no margin around the root
            threshold// trigger when 50% of the target is visible
        };
        const callback = (entries, observer) => {
            entries.forEach((entry) => {
                // Each entry describes an intersection change for one observed
                // target element:
                //   entry.boundingClientRect
                //   entry.intersectionRatio
                //   entry.intersectionRect
                //   entry.isIntersecting
                //   entry.rootBounds
                //   entry.target
                //   entry.time
                // console.log(entry.isIntersecting)
                const check_isIntersecting = entry.isIntersecting
                if (check_isIntersecting === true) {
                    const img_target = entry.target
                    const data_src_img = $(img_target).attr('data-src')
                    $(img_target).attr('src', data_src_img)
                }
            });
        };
        const observer = new IntersectionObserver(callback, options);
        // 3. Select the target element and start observing
        // const targetElement = $('#instagram_embed img')
        for (let index = 0; index < targetElement.length; index++) {
            const element = targetElement[index];
            if (element) {
                observer.observe(element);
            }
        }
    }
    // İNSTAGRAM RESİMLER START
    const target_element = $('#instagram_embed img')
    const root = null
    const rootMargin = '0px 20%'
    const threshold = 0.25
    IntersectionObserver_img_data_src_change(target_element, root, rootMargin, threshold)
    // İNSTAGRAM RESİMLER END

    // ÜRÜNLER START
    const target_element_1 = $('#product img')
    const root_1 = null
    const rootMargin_1 = '0px 20%'
    const threshold_1 = 0.25
    IntersectionObserver_img_data_src_change(target_element_1, root_1, rootMargin_1, threshold_1)
    // ÜRÜNLER END


}) // IntersectionObserver RESİMLERİN DATA-SRC SRC GEÇİŞLERİ
$(()=>{

    const target_div = $('#product .card')
    const active_div = 8
    for (let index = 0; index < active_div; index++) {
        const element = target_div[index];
        $(element).fadeIn();
      // $(element).fadeOut();
    }
    let new_active_div = 8
    $('button[name="back-to-up"]').on('click', function () {
         new_active_div += 8
        for (let index = 0; index < new_active_div; index++) {
            const element = target_div[index];
            $(element).fadeIn(2000);
        }
    });
})// ÜRÜNLER HEPSİNİ GÖSTERMEME










$(async () => {
    const get_url = '/instagram/post_reflesh'
    //  await axios_get(get_url).then((data)=> console.log(data))
}) // İNSTAGRAM POST REFLESH
$(async () => {
    const get_url = '/instagram/post_delete'
    //  await axios_get(get_url).then((data)=> console.log(data))
}) // İNSTAGRAM POST DELETE
$(async () => {
    const get_url = '/shopier'
    // await axios_get(get_url).then((data)=> console.log(data))
}) // SHOPİER ÜRÜN YENİLEME
$(async () => {
    const get_url = '/shopier/kategori'
    // await axios_get(get_url).then((data)=> console.log(data))
}) // SHOPİER KATAGORİ YENİLEME