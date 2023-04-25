const { User } = require('../models');
const jwt = require('jsonwebtoken');

const userController = {
  // Get all users
  async getAllUsers(req, res) {
    try {
      const allUsers = await User.find({});
      res.json(allUsers);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // Get user by ID
  async getUserById(req, res) {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
      res.json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // Authenticate user and login
  async loginUser(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        res.status(400).json({ message: 'No user found with this email!' });
        return;
      }
      const validPassword = await user.isCorrectPassword(req.body.password);
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
      res.json({ token, user });
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // Create a new user
  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // Update a user by ID
  async updateUser(req, res) {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!updatedUser) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
      res.json(updatedUser);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // Delete a user by ID
  async deleteUser(req, res) {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      if (!deletedUser) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
      res.json({ message: 'User deleted!' });
    } catch (err) {
      res.status(400).json(err);
    }
  }
};

module.exports = userController;
