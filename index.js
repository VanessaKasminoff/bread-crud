//Gets environment variables
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

const express = require('express')
const methodOverride = require('method-override')
const app = express()
const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI

//db connection
mongoose.connect(MONGO_URI).then(() => {
    console.log('Connected to mongo: ' + MONGO_URI);
})
.catch((err) => {
    console.log('Error connecting to mongo: ' + err);
});

//middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

//home route
app.get('/', (req, res) => {
    res.send('Welcome to the the best app about BREAD!')
})

//breads route
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

//bakers route
const bakersController = require('./controllers/bakers_controller.js')
app.use('/bakers', bakersController)

//404 page
app.get('*', (req, res) => {
    res.status(404).send('404')
})

//listening
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})