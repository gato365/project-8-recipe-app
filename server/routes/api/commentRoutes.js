// Create a routes for comments
// Comments (optional):

// POST /api/recipes/:recipeId/comments: Submit a comment for a specific recipe (requires authentication).
// PUT /api/recipes/:recipeId/comments/:commentId: Update a submitted comment (requires authentication and authorization as the comment's author).
// DELETE /api/recipes/:recipeId/comments/:commentId: Delete a submitted comment (requires authentication and authorization as the comment's author).

const router = require('express').Router();

const {
    addComment,
    removeComment,
    updateComment
} = require('../../controllers/comment-controller');


// Set up POST one at /api/recipes/:recipeId/comments
router
    .route('/:recipeId/comments')
    .post(addComment);

// Set up PUT one at /api/recipes/:recipeId/comments/:commentId
router
    .route('/:recipeId/comments/:commentId')
    .put(updateComment)
    .delete(removeComment);

module.exports = router;