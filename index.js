//Gets environment variables
require('dotenv').config()

const PORT = process.env.PORT

const app = require('express')()

app.get('/', (req, res) => {
    res.send('BREAD CRUD')
})

app.listen(PORT, () => {
    console.log('Wittle server running on port 3000')
})