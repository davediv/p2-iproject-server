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

// TWITTER - QUOTE GENERATOR - DONE
router.post('/twitter-quote', Controller.postTwtQuote)

// TWITTER - BIO GENERATOR
router.post('/twitter-bio', Controller.postTwtBio)

// TWITTER - FUN FACT GENERATOR
// router.post('/twitter-fact', Controller.postTwtFact)



module.exports = router