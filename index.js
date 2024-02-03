//Gets environment variables
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

const app = require('express')()

//home route
app.get('/', (req, res) => {
    res.send('Welcome to the the best app about BREAD!')
})

//breads route
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

//listening
app.listen(PORT, () => {
    console.log(`Little server running on port ${PORT}`)
})