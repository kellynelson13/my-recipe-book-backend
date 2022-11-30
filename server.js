/////// Dependencies /////////
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require("cors");
const mongoose = require('mongoose');

const Appetizers = require('./models/appetizers');

///////Middleware/////////
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(express.json()); // parse json bodies

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

////// test route /////////
app.get('/', (req, res) => {
    res.send('test')
})

//////// Index Route //////////
app.get('/appetizers', async (req, res) => {
    try {
        // send all apps
        res.json(await Appetizers.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
})







/////// Listener ///////////
const PORT = process.env.PORT;
app.listen(PORT, () => console.log("Listening on port:", PORT))