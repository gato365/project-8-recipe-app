// Create a Comment Controller
const { Recipe, Comment } = require('../models');

const commentController = {
    // Add a new comment to a recipe
    async addComment(req, res) {
        try {
            // Create a new comment
            const newComment = await Comment.create({ ...req.body, userId: req.user._id });
            const updatedRecipe = await Recipe.findByIdAndUpdate(
                req.params.recipeId,
                { $push: { comments: newComment._id } },
                { new: true }
            );

            if (!updatedRecipe) {
                return res.status(404).json({ message: 'No recipe with this ID found.' });
            }
            res.json(updatedRecipe);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Update a comment on a recipe
    async updateComment(req, res) {
        try {
            const updatedComment = await Comment.findOneAndUpdate(
                { _id: req.params.commentId, userId: req.user._id },
                req.body,
                { new: true }
            );

            if (!updatedComment) {
                return res.status(404).json({ message: 'No comment with this ID found.' });
            }
            res.json(updatedComment);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Remove a comment from a recipe
    async removeComment(req, res) {
        try {
            const deletedComment = await Comment.findOneAndDelete({
                _id: req.params.commentId,
                userId: req.user._id,
            });

            if (!deletedComment) {
                return res.status(404).json({ message: 'No comment with this ID found.' });
            }
            const updatedRecipe = await Recipe.findByIdAndUpdate(
                req.params.recipeId,
                { $pull: { comments: req.params.commentId } },
                { new: true }
            );
            res.json(updatedRecipe);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}


module.exports = commentController;
