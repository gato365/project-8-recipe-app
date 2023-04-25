
// Create the following Routes for the Recipe Model
// GET /api/recipes: Retrieve a list of all recipes, with optional filters for searching and sorting.
// GET /api/recipes/:recipeId: Retrieve a specific recipe by its ID.
// POST /api/recipes: Create a new recipe (requires authentication).
// PUT /api/recipes/:recipeId: Update a specific recipe (requires authentication and authorization as the recipe's author).
// DELETE /api/recipes/:recipeId: Delete a specific recipe (requires authentication and authorization as the recipe's author).
// GET /api/users/:userId/recipes: Retrieve all recipes submitted by a specific user.


const router = require('express').Router();

const {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe
} = require('../../controllers/recipe-controller');

// Set up GET all and POST at /api/recipes
router
  .route('/')
  .get(getAllRecipes)
  .post(createRecipe);

// Set up GET one, PUT, and DELETE at /api/recipes/:id
router
  .route('/:id')
  .get(getRecipeById)
  .put(updateRecipe)
  .delete(deleteRecipe);

module.exports = router;