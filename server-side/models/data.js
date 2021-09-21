const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    userId:{
        type: Number,
    },
    id:{
        type: Number,
    },
    title:{
        type: String,
    },
    body:{
        type: String,
    }})


module.exports = mongoose.model('Data', dataSchema)