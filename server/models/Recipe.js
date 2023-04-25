// Create Recipe Model
// - id: A unique identifier for each recipe.
// - title: The title of the recipe.
// - description: A brief description of the recipe.
// - cuisineId: A reference to the associated cuisine type.
// - ingredients: A list of ingredients for the recipe.
// - measurements: A list of measurements corresponding to the ingredients.
// - tasks: Step-by-step cooking instructions for the recipe.
// - images: Images of the finished dish and each step in the cooking process.
// - ratings: A list of ratings submitted by users.
// - authorId: A reference to the user who submitted the recipe.
// - createdAt: Timestamp of when the recipe was created.
// - updatedAt: Timestamp of when the recipe was last updated.


const { Schema, model } = require('mongoose');

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true

    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    cuisineId: {
        type: Schema.Types.ObjectId,
        ref: 'Cuisine'
    },
    ingredients: [
        {
            type: String,
            trim: true
        }
    ],
    measurements: [
        {
            type: String,
            trim: true
        }
    ],
    tasks: [
        {
            type: String,
            trim: true
        }
    ],
    images: [
        {
            type: String,
            trim: true
        }
    ],
    ratings: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Rating'
        }
    ],
    authorId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
    }
});

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;
