// Create the following Routes for the User Model
// POST /api/users/register: Register a new user.
// POST /api/users/login: Authenticate and log in an existing user.
// GET /api/users/:userId: Retrieve a user's profile information.
// PUT /api/users/:userId: Update a user's profile information.
// DELETE /api/users/:userId: Delete a user's account


const router = require('express').Router();

const {
  getAllUsers,
  getUserById,
  loginUser,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);


// Set up POST at /api/users/login
router
  .route('/login')
  .post(loginUser);


module.exports = router;