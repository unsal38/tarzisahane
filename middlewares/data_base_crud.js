const mongoose = require('mongoose')
const İnstagram_post = require('../schema/instagram_post_schema')



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
module.exports = { 
    data_base_create,
    data_base_instagram_posts_all_delete
 }