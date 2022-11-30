const mongoose = require('mongoose');

const appetizersSchema = new mongoose.Schema({
    name: String,
    img: String,
    ingredients: [{ingredient: String}],
    instructions: String
})

const Appetizers = mongoose.model("Appetizers", appetizersSchema);

module.exports = Appetizers;