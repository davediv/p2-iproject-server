const express = require('express');
const app = express()
const port = process.env.PORT || 3000
const router = require('./routes/route');
const cors = require('cors') // CORS
const cron = require('node-cron') // CRON
const { Configuration, OpenAIApi } = require('openai'); // OPENAI
const ping = require('ping') // PING
require('dotenv').config()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use(router)



// CRON - SCHEDULE
// cron.schedule('* * * * * *', () => {
//     console.log('Test Cron Disini');
// });






app.listen(port, () => {
    console.log(`App listening...port ${port}`)
})