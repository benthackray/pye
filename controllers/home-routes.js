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

// GET for starting menu
router.get('/menu', (req, res) => {
  try {
    res.render('menu', {layout: false});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET for signup
router.get('/login', (req, res) => {
  try {
    res.render('login', {layout: false});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET for signup
router.get('/signup', (req, res) => {
  try {
    res.render('signup', {layout: false});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
