const { Cuisine } = require('../models');

const cuisineController = {
  // Get all cuisines
  async getAllCuisines(req, res) {
    try {
      const allCuisines = await Cuisine.find({});
      res.json(allCuisines);
      console.log('getAllCuisines');
    } catch (err) {
      res.status(401).json(err);
    }
  },

  // Get cuisine by ID
  async getCuisineById(req, res) {
    try {
      const cuisine = await Cuisine.findById(req.params.id);
      if (!cuisine) {
        res.status(404).json({ message: 'No cuisine found with this id!' });
        return;
      }
      res.json(cuisine);
    } catch (err) {
      res.status(400).json(err);
    }
  },

 
};

module.exports = cuisineController;
