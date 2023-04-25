const { Rating, Recipe } = require('../models');

const ratingController = {
  // Add a new rating
  async addRating(req, res) {
    try {
      const newRating = await Rating.create({ ...req.body });

      const updatedRecipe = await Recipe.findByIdAndUpdate(
        req.params.recipeId,
        { $push: { ratings: newRating._id } },
        { new: true }
      );

      if (!updatedRecipe) {
        res.status(404).json({ message: 'No recipe found with this id!' });
        return;
      }

      res.json(newRating);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // Update a rating
  async updateRating(req, res) {
    try {
      const updatedRating = await Rating.findByIdAndUpdate(
        req.params.ratingId,
        { ...req.body },
        { new: true, runValidators: true }
      );

      if (!updatedRating) {
        res.status(404).json({ message: 'No rating found with this id!' });
        return;
      }

      res.json(updatedRating);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // Remove a rating
  async removeRating(req, res) {
    try {
      const ratingToDelete = await Rating.findByIdAndDelete(req.params.ratingId);

      if (!ratingToDelete) {
        res.status(404).json({ message: 'No rating found with this id!' });
        return;
      }

      const updatedRecipe = await Recipe.findByIdAndUpdate(
        req.params.recipeId,
        { $pull: { ratings: ratingToDelete._id } },
        { new: true }
      );

      if (!updatedRecipe) {
        res.status(404).json({ message: 'No recipe found with this id!' });
        return;
      }

      res.json({ message: 'Successfully deleted the rating!' });
    } catch (err) {
      res.status(400).json(err);
    }
  }
};

module.exports = ratingController;
