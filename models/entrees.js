const mongoose = require('mongoose');

const entreesSchema = new mongoose.Schema({
    name: String,
    img: String,
    ingredients: [{ingredient: String}],
    instructions: String
})

const Entrees = mongoose.model("Entrees", entreesSchema);

module.exports = Entrees;