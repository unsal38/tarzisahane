// OAuth 2.0: Authorization Code & Access Token (Node.js)
// Yetkilendirme kodu alma ve API erişim anahtarı isteme (Node.js)
const axios = require('axios');
require('dotenv').config

const url = 'https://api.shopier.com:8443/v1/oauth2/token';

const postData = {
    grant_type: 'authorization_code',
    code: req.query.code,
    state: req.query.state,
    client_id: process.env.client_id,
    client_secret: process.env.client_secret
}

const postHeader = {
    'Content-Type': 'application/x-www-form-urlencoded'
}

axios.post(url, postData, postHeader)
    .then(function (response) {
        //Success. Store the values in response accordingly
        console.log(response.data)
        const tokenType = response.data.token_type
        const expiresIn = response.data.expires_in;
        const accessToken = response.data.access_token;
        const refreshToken = response.data.refresh_token;
    })
    .catch(function (error) {
        //Failed. Check the error descriptions
        if (error) {
            const errorStatus = error.response.data.status;
            const errorType = error.response.data.error;
            const errorMessage = error.response.data.message;
            console.log(errorMessage, 'shopier js')
        }
    });
