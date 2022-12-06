const mongoose = require('mongoose');

const dessertsSchema = new mongoose.Schema({
    name: String,
    img: String,
    ingredients: [{ingredient: String}],
    instructions: String
})

const Desserts = mongoose.model("Desserts", dessertsSchema);

module.exports = Desserts;