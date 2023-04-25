const { Cuisine, Recipe } = require('../models');

const cuisineController = {
  // Get all cuisines
  async getAllCuisines(req, res) {
    try {
      const allCuisines = await Cuisine.find({});
      res.json(allCuisines);
    } catch (err) {
      res.status(400).json(err);
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

  // Get all recipes associated with a specific cuisine type
  async getRecipesByCuisine(req, res) {
    try {
      const cuisine = await Cuisine.findById(req.params.cuisineId).populate('recipes');
      if (!cuisine) {
        res.status(404).json({ message: 'No cuisine found with this id!' });
        return;
      }
      res.json(cuisine.recipes);
    } catch (err) {
      res.status(400).json(err);
    }
  }
};

module.exports = cuisineController;
