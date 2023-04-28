// Create a mongoose model for a cuisine
// 1. Cuisine:
// - id: A unique identifier for each cuisine type.
// - name: The name of the cuisine type (e.g., Italian, Mexican, Indian, etc.).
// - recipes: A list of recipes associated with the cuisine type.


const { Schema, model } = require('mongoose');

const cuisineSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
    }
});

module.exports = model('Cuisine', cuisineSchema);