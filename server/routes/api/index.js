const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
const cuisineRoutes = require('./cuisineRoutes');


router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/cuisines', cuisineRoutes);

module.exports = router;
