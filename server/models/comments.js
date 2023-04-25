// Create Comment Model

// id: Unique identifier for the comment.
// userId: The ID of the user who submitted the comment.
// recipeId: The ID of the recipe the comment is for.
// content: The text content of the comment.
// createdAt: Timestamp of when the comment was submitted.
// updatedAt: Timestamp of when the comment was last updated.

const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentsSchema = new Schema(
  {
    commentId: {
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
    content: {
      type: String,
      required: true,
      trim: true
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

const Comments = model('Comments', commentsSchema);

module.exports = Comments;