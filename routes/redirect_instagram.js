'use strict';

const express = require('express');
const instagram = express.Router();

//SCHEMA 
//CONTROLLER
//MİDDLEWARES
const instagram_api = require('../middlewares/instagram_api')
const data_base_crud = require('../middlewares/data_base_crud')
// ROUTER
instagram.get('/post_reflesh', async function (req, res) {
    instagram_api()
    res.send(true)
});
instagram.get('/post_delete', async function (req, res) {
    data_base_crud.data_base_instagram_posts_all_delete()
    res.send(true)
});
instagram.all('/redirect', async function (req, res) {
    const redirect_data = req.body
    console.log(redirect_data)
});



module.exports = instagram;