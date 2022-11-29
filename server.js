/////// Dependencies /////////
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require("cors");

/////// Listener ///////////
const PORT = process.env.PORT;
app.listen(PORT, () => console.log("Listening on port:", PORT))