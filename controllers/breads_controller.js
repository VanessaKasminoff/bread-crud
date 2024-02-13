const express = require('express')
const router = express.Router()

const render = require('../render')

//import model bread data
const Bread = require('../models/bread.js')

//breads route
router.get('/', (req, res) => {
    // res.send(render('Index', {breads: Bread}))
    Bread.find().then((breads) => {
        // console.log(breads)
        res.send(render('Index', {breads: breads}))
    })
})

//new route
router.get('/new', (req, res) => {
    res.send(render('New'))
})

//details route
router.get('/:id', (req, res) => {
    Bread.findById(req.params.id).then((bread) => {
        res.send(render('Show', {bread: bread}))
    }).catch((err) => {
        res.status(404).send('404: Unable to find bread')
    })
    // if (Bread[req.params.arrayIndex]) {
    //     res.send(render('Show', {
    //         bread: Bread[req.params.arrayIndex], 
    //         index: req.params.arrayIndex
    //     }))
    // } else {
    //     res.status(404).send('404')
    // }
})

//create route
router.post('/', (req, res) => {
    if (!req.body.image) {
        req.body.image = undefined
    }
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread.create(req.body)
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