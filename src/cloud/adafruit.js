const axios = require('axios')
const key = process.env.KEY
const username = process.env.NAME

const api_url = `https://io.adafruit.com/api/v2/${username}/feeds/`
const air_feed_id = 'air-conditioner'
const humidity_feed_id = 'humidity-sensor'
const light_feed_id = 'light-sensor'

const auto_modify_btn_feed_id = 'auto-modify-btn'
let auto_midify_btn_status = null;

(async () => {
    let data = await axios.get(api_url + auto_modify_btn_feed_id + "/data?limit=1")
    auto_midify_btn_status = data.data[0].value
})()

module.exports = {key,api_url,air_feed_id,auto_modify_btn_feed_id,humidity_feed_id,light_feed_id,auto_midify_btn_status}