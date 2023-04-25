const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
const cuisineRoutes = require('./cuisineRoutes');
const commentRoutes = require('./commentRoutes');
const ratingRoutes = require('./ratingRoutes');


router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/cuisines', cuisineRoutes);
router.use('/comments', commentRoutes);
router.use('/ratings', ratingRoutes);

module.exports = router;
