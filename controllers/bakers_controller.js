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

router.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
    .populate('breads')
    .then((baker) => {
        res.send(render('baker-show', {baker: baker}))
    })
    .catch(err => {
        console.log('err', err)
        res.status(404).send('404')
    })
})

//delete
router.delete('/:id', (req, res) => {
    Baker.findByIdAndDelete(req.params.id)
    .then((deletedBaker) => {
        res.status(303).redirect('/breads')
    })
})

module.exports = router