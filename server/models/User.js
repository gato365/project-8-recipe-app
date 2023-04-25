//Create a model for a user
// - id: A unique identifier for each user.
// - email: User's email address.
// - password: User's encrypted password.
// - firstName: User's first name.
// - lastName: User's last name.
// - favoriteFood: User's favorite food or cuisine.
// - likes: A list of recipes liked by the user.
// - recipes: A list of recipes submitted by the user.
// - createdAt: Timestamp of when the user's account was created.
// - updatedAt: Timestamp of when the user's account was last updated.


const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true

    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    favoriteFood: {
        type: String,
        trim: true
    },
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Recipe'
        }
    ],
    recipes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Recipe'
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
    }
});

module.exports = model('User', userSchema);


