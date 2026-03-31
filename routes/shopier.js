'use strict';

const express = require('express');
const shopier = express.Router();

//SCHEMA 
//CONTROLLER
//MİDDLEWARE
let shopier_api = require('../middlewares/shopier')
let data_base_shopier_create = require('../middlewares/data_base_crud')

shopier.get('/kategori', async function (req, res) {
  const data_kategori_listele_shopier = await shopier_api.shopier_api_kategori_listele()
  await data_base_shopier_create.data_base_kategori_all_delete()
  try {
    for (let index = 0; index < data_kategori_listele_shopier.length; index++) {
      const element = data_kategori_listele_shopier[index];
      await data_base_shopier_create.data_base_kategori_create(element)
    }
  } catch (err) {
    if (err) { err => console.log(err, 'shopier router') }
  }
  res.send(true)
})
shopier.get('/', async function (req, res) {
  const data_product_shopier = shopier_api.shopier_api_listele()
  await data_base_shopier_create.data_base_product_all_delete()
  data_product_shopier
    .then(async (data) => {
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        await data_base_shopier_create.data_base_product_create(element)
      }
    })
    .catch(err => console.log(err))
  res.send(true)
});



module.exports = shopier;