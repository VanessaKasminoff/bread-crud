const express = require('express')
const router = express.Router()

const render = require('../render')

//import model bread data
const Bread = require('../models/bread.js')

//breads route
router.get('/', (req, res) => {
    Bread.find().then((breads) => {
        res.send(render('Index', {breads: breads}))
    }).catch((err) => {
        console.log('err', err)
        res.status(404).send('404')
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
        console.log('err', err)
        res.status(404).send('404: Unable to find bread')
    })
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
router.put('/:id', (req, res) => {
    if (!req.body.image) {
        req.body.image = undefined
    }
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((updatedBread) => {
        console.log(updatedBread)
        res.redirect(`/breads/${req.params.id}`)
    }).catch((err) => {
        console.log('err', err)
        res.status(404).send('404')
    })
})

//edit route form
router.get('/:id/edit', (req, res) => {
    Bread.findById(req.params.id).then((foundBread) => {
        res.send(render('edit', {bread: foundBread}))
    }).catch((err) => {
        console.log('err', err)
        res.status(404).send('404')
    })
})

//delete route
router.delete('/:id', (req, res) => {
    Bread.findByIdAndDelete(req.params.id).then((deletedBread) => {
        res.status(303).redirect('/breads')
    }).catch((err) => {
        console.log('err', err)
        res.status(404).send('404')
    })
})

module.exports = router