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
    if (Bread[req.params.arrayIndex]) {
        res.send(render('Show', {bread: Bread[req.params.arrayIndex]}))
    } else {
        res.status(404).send('404')
    }
})

module.exports = router