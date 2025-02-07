const router = require('express').Router()
const Controller = require('../controllers/controller')


// router.get('/', (req, res) => {
//     res.send('TEST MASUK BOY')
// })

// INDEX
router.get('/', Controller.index)

// TWITTER - TWEET - DONE
router.post('/twitter-tweet', Controller.postTwtTweet)

// TWITTER - HASHTAG - DONE
router.post('/twitter-hashtag', Controller.postTwtHashtag)

// TWITTER - QUOTE - DONE
router.post('/twitter-quote', Controller.postTwtQuote)

// TWITTER - BIO - DONE
router.post('/twitter-bio', Controller.postTwtBio)

// TWITTER - FUN FACT - DONE
router.post('/twitter-fact', Controller.postTwtFact)

// TWITTER - ENGAGING QUESTION - DONE
router.post('/twitter-engage', Controller.postTwtEngage)


// REGISTER - DONE
router.post('/register', Controller.register)

// LOGIN - DONE
router.post('/login', Controller.login)

// USERNAME CHECKER - DONE
router.post('/username-checker', Controller.usernameChecker)

// DOWN CHECKER - DONE
router.get('/down-checker', Controller.downChecker)

// SHOW TWITTER TREND - DONE
router.get('/twitter-trends', Controller.getTwitterTrends)

// TEST DALL-E - DONE
router.post('/image-dalle', Controller.postImageDallE)



module.exports = router