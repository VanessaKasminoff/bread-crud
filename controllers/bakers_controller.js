//dependencies
const express = require('express')
const router = express.Router()
const render = require('../render')

//import baker model
const Baker = require('../models/baker.js')

// bakers route
router.get('/', async (req,res) => {
    let bakers = await Baker.find().populate('breads')

    res.send(bakers)
    // Baker.find()
    //     .populate('breads')
    //     .then((bakers) => {
    //         res.send(bakers)
    //     })
})

router.get('/:id', async (req, res) => {
    try {
        let baker = await Baker.findById(req.params.id)
        .populate({
            path: 'breads',
            options: {limit: 2}
        })

        res.send(render('baker-show', {baker: baker}))
    } catch (err) {
        res.status(404).send('404')
    }

    // Baker.findById(req.params.id)
    // .populate({
    //     path: 'breads',
    //     options: {limit: 2}
    // })
    // .then((baker) => {
    //     res.send(render('baker-show', {baker: baker}))
    // })
    // .catch(err => {
    //     console.log('err', err)
    //     res.status(404).send('404')
    // })
})

//delete
router.delete('/:id', async (req, res) => {
    let deletedBaker = await Baker.findByIdAndDelete(req.params.id)

    res.status(303).redirect('/breads')
    // Baker.findByIdAndDelete(req.params.id)
    // .then((deletedBaker) => {
    //     res.status(303).redirect('/breads')
    // })
})

module.exports = router