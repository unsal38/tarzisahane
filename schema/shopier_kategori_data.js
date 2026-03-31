const mongoose = require("mongoose");

const shopier_kategori_dataSchema = new mongoose.Schema({
    id: String, // '25c0ac6dd8de9d1a',
    title: String, // 'Çocuk Parti Malzemeleri',
    placement: String, // 1

}, { timestamps: true })


module.exports = mongoose.model("shopier_kategori_data", shopier_kategori_dataSchema)