const mongoose = require("mongoose");

const shopier_product_dataSchema = new mongoose.Schema({
    id: String, // '42490464',
    title: String,// 'Masa lambası',
    description: String, // "SR NU. 6 Özel tasarım gece lambası. Karadeniz'den evinize uzanan bir yolculuk..",
    type: String, //'physical',
    dateCreated:String,// '2025-12-24T12:48:57+0300',
    dateUpdated: String,// '2026-01-07T15:36:34+0300',
    url: String,//. 'https://www.shopier.com/42490464',
    media: Array, // [[Object], [Object]],
    priceData: {
        currency: String, //'TRY',
        price:String, // '1250.00',
        discount: Boolean, // false,
        discountedPrice:String, // '1250.00',
        shippingPrice: String, // '0.00'
    },
    stockStatus: String, // 'inStock',
    stockQuantity: String, // 1,
    shippingPayer:String, // 'sellerPays',
    categories: Array, // [[Object]],
    variants: Array, // [],
    options: Array, // [],
    singleOption: Boolean, // false,
    customListing: Boolean, // false,
    customNote:String, // '',
    placementScore:String, // '',
    dispatchDuration:String, // 0

}, { timestamps: true })


module.exports = mongoose.model("shopier_product_data", shopier_product_dataSchema)