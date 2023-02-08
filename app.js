const express = require('express');
const app = express()
const port = process.env.PORT || 3000
const router = require('./routes/route');
const cors = require('cors')
const cron = require('node-cron') // CRON JOB
require('dotenv').config()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use(router)


// TEST CRON
// cron.schedule('* * * * * *', () => {

//     setTimeout(() => {
//         let data = randNum(85, 98)
//         fs.writeFileSync(`./data/index.html`, `Ini random number nya : ${data}, semoga bisa ya...`)
//     }, 3000)

// });


app.listen(port, () => {
    console.log(`App listening...port ${port}`)
})