const Cuisine = require('./models/Cuisine');
const cuisineSchema = Cuisine.schema;
const attributeNames = Object.keys(cuisineSchema.paths);
console.log(attributeNames);



// const User = require('./models/User');
// const userSchema = User.schema;
// const attributeNames = Object.keys(userSchema.paths);
// console.log(attributeNames);