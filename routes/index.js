'use strict';

const express = require('express');
const site = express.Router();

//SCHEMA 
const instagram_post_schema = require('../schema/instagram_post_schema')
const shopier_product_data = require('../schema/shopier_product_data')
const shopier_katogori_data_ = require('../schema/shopier_kategori_data')
//CONTROLLER
const mail = require('../controllers/mail')
site.get('/', async function (req, res) {
  const insta_post_data = await instagram_post_schema.find()
  const shopi_product_data = await shopier_product_data.find()
  const shopi_product_data_trend = await shopier_product_data.find().limit(4)
  const shopier_katogori_data = await shopier_katogori_data_.find()
  res.render('index', {
    page: 'index',
    insta_post_data,
    shopi_product_data,
    shopi_product_data_trend,
    shopier_katogori_data
  });
});



module.exports = site;