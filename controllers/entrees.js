const express = require('express');
const entreeRouter = express.Router();
const Entrees = require('../models/entrees');

////////// Routes //////////////

//////// Entrees Index Route //////////
entreeRouter.get('/', async (req, res) => {
    try {
        // send all apps
        res.json(await Entrees.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

////////// Entrees Delete Route //////////
entreeRouter.delete("/:id", async (req, res) => {
    try {
      // send all apps
      res.json(await Entrees.findByIdAndRemove(req.params.id));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });

/////// Entrees Update Route /////////
entreeRouter.put("/:id", async (req, res) => {
    try {
      // send all apps
      res.json(
        await Entrees.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });


/////// Entrees Create Route ////////
entreeRouter.post("/", async (req, res) => {
    try {
        // send all apps
        res.json(await Entrees.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});



module.exports = entreeRouter;