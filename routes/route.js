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


// REGISTER
router.post('/register', Controller.register)

// LOGIN
router.post('/login', Controller.login)


module.exports = router