const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ColorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
})

const Color = mongoose.model('Color', ColorSchema)
module.exports = Color