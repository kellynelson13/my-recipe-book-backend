const express = require('express');
const dessertsRouter = express.Router();
const Desserts = require('../models/desserts');

////////// Routes //////////////

//////// Desserts Index Route //////////
dessertsRouter.get('/', async (req, res) => {
    try {
        // send all apps
        res.json(await Desserts.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

////////// Desserts Delete Route //////////
dessertsRouter.delete("/:id", async (req, res) => {
    try {
      // send all apps
      res.json(await Desserts.findByIdAndRemove(req.params.id));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });

/////// Desserts Update Route /////////
dessertsRouter.put("/:id", async (req, res) => {
    try {
      // send all apps
      res.json(
        await Desserts.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });


/////// Desserts Create Route ////////
dessertsRouter.post("/", async (req, res) => {
    try {
        // send all apps
        res.json(await Desserts.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});



module.exports = dessertsRouter;