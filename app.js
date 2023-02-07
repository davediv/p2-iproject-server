const express = require('express');
const app = express()
const port = process.env.PORT || 3000
const router = require('./routes/route');
const cors = require('cors')
require('dotenv').config()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use(router)

app.listen(port, () => {
    console.log(`App listening...port ${port}`)
})