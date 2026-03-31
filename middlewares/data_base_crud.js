const mongoose = require('mongoose')
const İnstagram_post = require('../schema/instagram_post_schema')
const shopier_product_data = require('../schema/shopier_product_data')
const shopier_kategori_data = require('../schema/shopier_kategori_data')



const data_base_create = function data_base_create(data) {
    try {
        const create = new İnstagram_post(data)
        create.save()
        return true
    } catch (err) {
        console.log(err.message)
        return false
    }
}
const data_base_instagram_posts_all_delete = async function data_base_instagram_posts_all_delete() {
    const post =await İnstagram_post.find()

    for (let index = 0; index < post.length; index++) {
        const element = post[index];
        const insta_post_id = element.id
        await İnstagram_post.findByIdAndDelete(insta_post_id)
    }
    
}
const data_base_product_create = function data_base_product_create(data) {
        try {
        const create = new shopier_product_data(data)
        create.save()
        return true
    } catch (err) {
        console.log(err.message)
        return false
    }
}
const data_base_product_all_delete = async function data_base_product_all_delete() {
        const pruduct =await shopier_product_data.find()

    for (let index = 0; index < pruduct.length; index++) {
        const element = pruduct[index];
        const pruduct_id = element._id
        await shopier_product_data.findByIdAndDelete(pruduct_id)
    }
}
const data_base_kategori_create = function data_base_kategori_create(data) {
        try {
        const create = new shopier_kategori_data(data)
        create.save()
        return true
    } catch (err) {
        console.log(err.message)
        return false
    }
}
const data_base_kategori_all_delete = async function data_base_kategori_all_delete() {
        const kategori =await shopier_kategori_data.find()

    for (let index = 0; index < kategori.length; index++) {
        const element = kategori[index];
        const kategori_id = element._id
        await shopier_product_data.findByIdAndDelete(kategori_id)
    }
}
module.exports = { 
    data_base_create,
    data_base_instagram_posts_all_delete,
    data_base_product_create,
    data_base_product_all_delete,
    data_base_kategori_all_delete,
    data_base_kategori_create
 }