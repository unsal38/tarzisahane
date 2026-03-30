const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require('path');
const mongoose = require('mongoose');
// ROUTERLAR   
const indexRouter = require("./routes/index");
const instagram = require('./routes/redirect_instagram')
// MİDDLEWARE
const send_contact_mail = require('./middlewares/nodemailler');
// MONGOOSE 
require("./config/mongodb");
// SİTE CONFİG 
const configPath = path.join( __dirname, 'public');
app.use(express.static(configPath))
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cookieParser());





// SİTE PAGE ROUTER
app.use('/instagram', instagram)
app.use("/", indexRouter);


app.use((req, res, next) => {
    res.status(404).render('404');
});
app.listen(3000, console.log("http://localhost:3000", "listen 3000"), error=>{if(error){console.log(error.message)}});