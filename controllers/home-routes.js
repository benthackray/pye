const router = require('express').Router();
const { Gallery, Painting } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET for homepage
router.get('/', withAuth ,async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET for homepage
router.get('/login', (req, res) => {
  try {
    res.render('login');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET for login
router.get('/signup', (req, res) => {
  try {
    res.render('signup');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
