// Create a model for the Cuisine collection
// GET /api/cuisines: Retrieve a list of all cuisine types.
// GET /api/cuisines/:cuisineId: Retrieve a specific cuisine type by its ID.
// GET /api/cuisines/:cuisineId/recipes: Retrieve all recipes associated with a specific cuisine type.


const router = require('express').Router();

const {
  getAllCuisines,
  getCuisineById
} = require('../../controllers/cuisine-controller');

// Set up GET all at /api/cuisines
router
  .route('/')
  .get(getAllCuisines);

// Set up GET one at /api/cuisines/:id
router
  .route('/:id')
  .get(getCuisineById);

module.exports = router;
