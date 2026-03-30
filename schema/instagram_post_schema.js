const mongoose = require("mongoose");

const instagram_postSchema = new mongoose.Schema({
    instagram_id: String, // id: '18037170446398023',
    caption: String,// caption: 'Tarzınızı yansıtan tasarım kolye ve küpe takımı...\n' +
    media_url: String,//  media_url: 'https://scontent.cdninstagram.com/v/t51.82787-15/520809497_17874214800388109_8959304765904759377_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=QYfg-q1wSYgQ7kNvwF_GBGn&_nc_oc=AdrVf74sLUy6t7sIHOYZxtrHm8INR_2EsJ5-AhJKoui2RqVPwQmyP811hl_maaAYd-E&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=uduF-0zcgW2aF8YEUVr2ew&_nc_tpa=Q5bMBQFK2Qgtl2iKiP7sh9D3gly5_peUQFLfzvq5mT2Y73zVHTbWm4SOu-zIGaqFJSyNXEeu9DIJnvl8kg&oh=00_Afylw3Ua3eVfNoUSTGPXm4EHcKidX4-QSo1Nf22koeY4aQ&oe=69CD33F7',
    instagram_timestamp: String // timestamp: '2025-07-18T16:21:21+0000'
}, { timestamps: true })


module.exports = mongoose.model("İnstagram_post", instagram_postSchema)
