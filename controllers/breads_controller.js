const express = require('express')
const router = express.Router()

//import model bread data
const Bread = require('../models/bread.js')

router.get('/', (req, res) => {
    res.send(Bread)
})

router.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
})

module.exports = router