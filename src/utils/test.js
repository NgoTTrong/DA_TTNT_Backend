import MQTTAdafruitIO from "./adafruit_api.js"

const username = 'Heo_Rey'
const key = 'aio_dKJy32dJkMvsexDDgdoVbYTPNqxU'
const options = {
    port: 8883
}
let client = new MQTTAdafruitIO(username,key,options)

client.connect()
client.subscribe('fan')