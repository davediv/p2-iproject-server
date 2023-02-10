require('dotenv').config()
const express = require('express');
const app = express()
const port = process.env.PORT || 3000
const router = require('./routes/route');
const cors = require('cors') // CORS
const cron = require('node-cron') // CRON
const { Configuration, OpenAIApi } = require('openai'); // OPENAI
const ping = require('ping') // PING
const puppeteer = require('puppeteer')
const fs = require('fs')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use(router)


// SCRAPE TWITTER TRENDS
const scrapeTrend = async () => {

    const browser = await puppeteer.launch({
        headless: true,
        ignoreHTTPSErrors: true,
    })

    let page = await browser.newPage();

    await page.goto('https://twitter-trends.iamrohit.in/indonesia', {
        waitUntil: 'domcontentloaded',
    });

    let htmlOutput = await page.content()

    let rgx1 = /<a href(.*)class=["']tweet["'](.*)<\/a>/g

    let result1 = htmlOutput.match(rgx1)
    
    fs.writeFileSync(`./data/twitter-trends.txt`, `${result1}`)


    // CLEAN HTML
    let trendHTML = fs.readFileSync('./data/twitter-trends.txt', 'utf-8')
    let rgx2 = /(<([^>]+)>)/ig
    let rgx3 = /,/ig

    trendHTML = trendHTML.replace(rgx2, '')
    trendHTML = trendHTML.replace(rgx3, '\n')
    fs.writeFileSync(`./data/twitter-trends.txt`, `${trendHTML}`)

    await page.close();
    await browser.close();
}


// CRON - SCRAPE TWITTER TRENDS - EVERY HOUR
cron.schedule('0 * * * *', () => {
    scrapeTrend()
});


// CRON - SCHEDULE
// cron.schedule('* * * * * *', () => {
//     scrapeTrend()
// });










app.listen(port, () => {
    console.log(`App listening...port ${port}`)
})