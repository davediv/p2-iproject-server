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





module.exports = router