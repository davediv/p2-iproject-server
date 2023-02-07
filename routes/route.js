const router = require('express').Router()
// const Controller = require('../controllers')


router.get('/', (req, res) => {
    res.send('TEST MASUK BOY')
})

// router.get('/', Controller.index)

// router.post('/twitter', Controller.postTwt);

// router.post('/facebook', Controller.postFb);

// router.post('/instagram', Controller.postIg);

module.exports = router