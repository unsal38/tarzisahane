'use strict';

const express = require('express');
const site = express.Router();

//SCHEMA 
const instagram_post_schema = require('../schema/instagram_post_schema')
//CONTROLLER
const mail = require('../controllers/mail')
site.get('/', async function (req, res) {
  const insta_post_data = await instagram_post_schema.find()
  res.render('index', {
    page: 'index',
    insta_post_data

  });
});



module.exports = site;