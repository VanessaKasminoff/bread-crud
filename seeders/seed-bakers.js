const Baker = require('../models/baker.js')
require('dotenv').config()
const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI

//db connection
mongoose.connect(MONGO_URI).then(() => {
    console.log('Connected to mongo: ', MONGO_URI)
}).catch(err => {
    console.log('Error connecting to mongo: ', err)
})

Baker.create([
    {
        name: 'Monica',
        startDate: '1994-09-22',
        bio: "Prefers napkins folded a particular way."
    },
    {
        name: 'Ross',
        startDate: '1995-09-21',
        bio: "Loves dinosaurs. Is currently on a break."
    },
    {
        name: 'Joey',
        startDate: '1996-09-19',
        bio: "Does NOT share food. Recommends that you read Little Women."
    },
    {
        name: 'Phoebe',
        startDate: '1996-09-19',
        bio: "Fierce protector of the bakery's smelly cat."
    },
    {
        name: 'Chandler',
        startDate: '1997-09-25',
        bio: "Thinks chewing gum is perfection. Honestly, could it BE any better?"
    },
    {
        name: 'Rachel',
        startDate: '1998-09-24',
        bio: "Is NOT a shoe. Occasionally a fan of lobsters."
    },
])
.then(() => {
    console.log('Successfully created bakers!')
})
.catch(err => {
    console.log('Failed to create bakers: ', err)
})