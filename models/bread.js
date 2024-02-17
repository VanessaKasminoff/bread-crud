const mongoose = require('mongoose')
const { Schema } = mongoose

const breadSchema = new Schema({
  name: {type: String, required: true},
  hasGluten: {type: Boolean, default: true},
  image: {type: String, default: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  baker: {
    type: Schema.Types.ObjectId,
    ref: 'Baker'
  }
})

//helper methods
breadSchema.method('getBakedBy', function() {
  return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}`
})

breadSchema.static('findByBaker', function(baker) {
  return this.find({baker: baker})
})

const Bread = mongoose.model('Bread', breadSchema)

module.exports = Bread