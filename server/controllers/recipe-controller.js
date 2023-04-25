const { Recipe } = require('../models');

const recipeController = {
  // Get all recipes
  async getAllRecipes(req, res) {
    try {
      const allRecipes = await Recipe.find({});
      res.json(allRecipes);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // Get recipe by ID
  async getRecipeById(req, res) {
    try {
      const recipe = await Recipe.findById(req.params.id);
      if (!recipe) {
        res.status(404).json({ message: 'No recipe found with this id!' });
        return;
      }
      res.json(recipe);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // Create a new recipe
  async createRecipe(req, res) {
    try {
      const newRecipe = await Recipe.create(req.body);
      res.json(newRecipe);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // Update a recipe by ID
  async updateRecipe(req, res) {
    try {
      const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!updatedRecipe) {
        res.status(404).json({ message: 'No recipe found with this id!' });
        return;
      }
      res.json(updatedRecipe);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // Delete a recipe by ID
  async deleteRecipe(req, res) {
    try {
      const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
      if (!deletedRecipe) {
        res.status(404).json({ message: 'No recipe found with this id!' });
        return;
      }
      res.json({ message: 'Recipe deleted!' });
    } catch (err) {
      res.status(400).json(err);
    }
  }
};

module.exports = recipeController;
