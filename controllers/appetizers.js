const express = require('express');
const appRouter = express.Router();
const Appetizers = require('../models/appetizers')

/////// Routes ////////////


//////// Appetizers Index Route //////////
appRouter.get('/', async (req, res) => {
    try {
        // send all apps
        res.json(await Appetizers.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

////////// Appetizers Delete Route //////////
appRouter.delete("/:id", async (req, res) => {
    try {
      // send all apps
      res.json(await Appetizers.findByIdAndRemove(req.params.id));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });

/////// Appetizers Update Route /////////
appRouter.put("/:id", async (req, res) => {
    try {
      // send all apps
      res.json(
        await Appetizers.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });


/////// Appetizers Create Route ////////
appRouter.post("/", async (req, res) => {
    try {
        // send all apps
        res.json(await Appetizers.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});



module.exports = appRouter;
