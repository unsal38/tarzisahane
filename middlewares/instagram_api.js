const axios = require('axios')
require('dotenv').config
const create_data_base = require('../middlewares/data_base_crud');

async function getInstagramPosts(token) {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp&access_token=${token}`;

    try {
        const response = await axios.get(url);
        // const data_response = response.data.data
        const data_response = response.data.data
        for (let index = 0; index < data_response.length; index++) {
            const response_single_value = data_response[index];
            const data_crud = {
                instagram_id: response_single_value.id,
                caption: response_single_value.caption,
                media_url: response_single_value.media_url,
                instagram_timestamp: response_single_value.timestamp
            }
            await create_data_base.data_base_create(data_crud)
        }

    } catch (error) {
        console.error('Hata:', error);
    }
}
// Example usage (replace with your actual User ID and Access Token)

const instagram_api = async function instagram_api() {
    const YOUR_ACCESS_TOKEN = process.env.instagram_token
    getInstagramPosts(YOUR_ACCESS_TOKEN);
}


module.exports = instagram_api