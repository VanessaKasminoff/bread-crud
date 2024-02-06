//Gets environment variables
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

const express = require('express')
const app = express()

//middleware
app.use(express.static('public'))

//home route
app.get('/', (req, res) => {
    res.send('Welcome to the the best app about BREAD!')
})

//breads route
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

//404 page
app.get('*', (req, res) => {
    res.status(404).send('404')
})

//listening
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})