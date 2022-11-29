/////// Dependencies /////////
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require("cors");
const mongoose = require('mongoose');

/////// Database Connection /////////
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

////// Database Connection Error/Success//////////////
////// Define callback functions for various events/////////////
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));


/////// Routes ////////////

////// Index /////////
app.get('/recipes', (req, res) => {
    res.send('index page')
})

//////Create /////////
app.post('/recipes', (req, res) => {
    res.send('received')
})





/////// Listener ///////////
const PORT = process.env.PORT;
app.listen(PORT, () => console.log("Listening on port:", PORT))