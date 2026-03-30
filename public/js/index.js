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

$(() => {
    $("#instagram_embed .owl-carousel").owlCarousel({
        nav: true,
        loop: true,
        margin: 10,
        navText: ['<i class="fa-solid fa-angles-left"></i>', '<i class="fa-solid fa-angles-right"></i>'],
        autoplay: true,
    });
}) // OWL CARUSEL













$(async () => {
    const get_url = '/instagram/post_reflesh'
    //  await axios_get(get_url).then((data)=> console.log(data))
}) // İNSTAGRAM POST REFLESH
$(async () => {
    const get_url = '/instagram/post_delete'
    //  await axios_get(get_url).then((data)=> console.log(data))
}) // İNSTAGRAM POST DELETE