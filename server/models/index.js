// Bring in Relevant Models
const User = require('./User');
const Recipe = require('./Recipe');
const Cuisine = require('./Cuisine');
const Comment = require('./Comment');
const Rating = require('./Rating');

// Export Models
module.exports = { User, Recipe, Cuisine, Comment, Rating };