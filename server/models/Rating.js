// Creare a ratings model


// id: Unique identifier for the rating.
// userId: The ID of the user who submitted the rating.
// recipeId: The ID of the recipe the rating is for.
// ratingValue: The numerical rating value (e.g., 1 to 5).
// createdAt: Timestamp of when the rating was submitted.
// updatedAt: Timestamp of when the rating was last updated.


const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ratingsSchema = new Schema(
  {
    ratingId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    recipeId: {
      type: Schema.Types.ObjectId,
      ref: 'Recipe'
    },
    ratingValue: {
      type: Number,
      min: 1,
      max: 5
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp)
    },
    updatedAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Ratings = model('Ratings', ratingsSchema);

module.exports = Ratings;