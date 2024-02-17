//dependencies
const express = require('express')
const router = express.Router()
const render = require('../render')

//import baker model
const Baker = require('../models/baker.js')

// bakers route
router.get('/', (req,res) => {
    Baker.find()
        .populate('breads')
        .then((bakers) => {
            res.send(bakers)
        })
})

module.exports = router