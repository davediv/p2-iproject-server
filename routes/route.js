const router = require('express').Router()
const Controller = require('../controllers/controller')


// router.get('/', (req, res) => {
//     res.send('TEST MASUK BOY')
// })

// INDEX
router.get('/', Controller.index)

// TWITTER - TWEET GENERATOR - DONE
router.post('/twitter-tweet', Controller.postTwtTweet);

// TWITTER - HASHTAG GENERATOR - DONE
router.post('/twitter-hashtag', Controller.postTwtHashtag);

// TWITTER - QUOTE GENERATOR
router.post('/twitter-quote', Controller.postTwtQuote)




module.exports = router