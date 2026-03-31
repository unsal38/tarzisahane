// OAuth 2.0: Authorization Code & Access Token (Node.js)
// Yetkilendirme kodu alma ve API erişim anahtarı isteme (Node.js)
const axios = require('axios');
require('dotenv').config

const shopier_api_listele = function shopier_api_listele() {
    const url = 'https://api.shopier.com/v1/products?limit=10&page=1&sort=dateDesc';
    const config = {
        headers: {
            accept: 'application/json',
            authorization: `Bearer ${process.env.instagram_token}`
        }

    }
    const shopier_Data_promise = new Promise(function (resolve, reject) {
        axios.get(url, config)
            .then(function (res) {
                resolve(res.data)
                // console.log(res.data,'1')

            })
            .catch(function (err) {
                if (err) {
                    const errorMessage = err.message;
                    console.log(errorMessage, 'shopier js')
                }
            });
    })
    return shopier_Data_promise
}
const shopier_api_kategori_listele = function shopier_api_kategori_listele() {
    const url = 'https://api.shopier.com/v1/categories?limit=10&page=1&sort=asc';
    const config = {
        headers: {
            accept: 'application/json',
            authorization: `Bearer ${process.env.instagram_token}`
        }

    }
    const shopier_kategori_Data_promise = new Promise(function (resolve, reject) {
        axios.get(url, config)
            .then(function (res) {
                resolve(res.data)
                // console.log(res.data, '2')

            })
            .catch(function (err) {
                if (err) {
                    const errorMessage = err.message;
                    console.log(errorMessage, 'shopier js')
                }
            });
    })
    return shopier_kategori_Data_promise
}
module.exports = {
    shopier_api_listele,
    shopier_api_kategori_listele,
}