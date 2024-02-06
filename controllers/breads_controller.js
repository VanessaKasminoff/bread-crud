const express = require('express')
const router = express.Router()
const render = require('../render')

//import model bread data
const Bread = require('../models/bread.js')

//breads route
router.get('/', (req, res) => {
    res.send(render('Index', {breads: Bread}))
})

//sends the index of the bread.js data
router.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
})

module.exports = router