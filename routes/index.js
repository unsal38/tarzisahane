'use strict';

const express = require('express');
const site = express.Router();

//SCHEMA 
//CONTROLLER
const mail = require('../controllers/mail')

site.get('/',async function (req, res) {
  res.render('index',{
    page: 'index',

  });
});



module.exports = site;