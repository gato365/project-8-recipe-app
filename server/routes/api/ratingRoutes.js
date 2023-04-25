// Create Ratings Routes

// POST /api/recipes/:recipeId/ratings: Submit a rating for a specific recipe (requires authentication).
// PUT /api/recipes/:recipeId/ratings/:ratingId: Update a submitted rating (requires authentication and authorization as the rating's author).
// DELETE /api/recipes/:recipeId/ratings/:ratingId: Delete a submitted rating (requires authentication and authorization as the rating's author).


const router = require('express').Router();

const {
    addRating,
    removeRating,
    updateRating
} = require('../../controllers/rating-controller');


// Set up POST one at /api/recipes/:recipeId/ratings
router
    .route('/:recipeId/ratings')
    .post(addRating);
    
// Set up PUT one at /api/recipes/:recipeId/ratings/:ratingId
router
    .route('/:recipeId/ratings/:ratingId')
    .put(updateRating)
    .delete(removeRating);

module.exports = router;
