const express = require('express')
const router = express.Router()

const render = require('../render')

//import model bread data
const Bread = require('../models/bread.js')

//breads route
router.get('/', (req, res) => {
    res.send(render('Index', {breads: Bread}))
})

//new route
router.get('/new', (req, res) => {
    res.send(render('New'))
})

//details route
router.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]) {
        res.send(render('Show', {
            bread: Bread[req.params.arrayIndex], 
            index: req.params.arrayIndex
        }))
    } else {
        res.status(404).send('404')
    }
})

//create route
router.post('/', (req, res) => {
    if (!req.body.image) {
        req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    }
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread.push(req.body)
    res.redirect('/breads')
})

//update route
router.put('/:arrayIndex', (req, res) => {
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread[req.params.arrayIndex] = req.body
    res.redirect(`/breads/${req.params.arrayIndex}`)
})

//edit route form
router.get('/:arrayIndex/edit', (req, res) => {
    res.send(render('Edit', {
        bread: Bread[req.params.arrayIndex],
        index: req.params.arrayIndex
    }))
})

//delete route
router.delete('/:arrayIndex', (req, res) => {
    Bread.splice(req.params.arrayIndex, 1)
    res.status(303).redirect('/breads')
})

module.exports = router