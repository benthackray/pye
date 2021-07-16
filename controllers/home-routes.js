const router = require('express').Router();
const { User, Pie, Vote } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET for homepage
router.get('/', withAuth ,async (req, res) => {
  try {
    const pieData = await Pie.findAll({
      include: [
          {
              model: User
          }
      ],
  });

  const pies = pieData.map((pie) =>
      pie.get({ plain: true })
  );

  res.render('homepage', {pies, loggedIn: req.session.loggedIn});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//TODO: Remove
router.get('/test', async (req, res) => {
  try {
    const pieData = await Pie.findAll({
      include: [
          {
              model: User
          }
      ],
  });

  const pies = pieData.map((pie) =>
      pie.get({ plain: true })
  );

  console.log(pies)

  res.render('test', {pies});
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

// GET for a particular pie
router.get('/pie/:id', (req, res) => {
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

// GET for page to create or delete a new Pie poll
router.get('/create', (req, res) => {
  try {
    res.render('create');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET for profile page to change and view profile options
router.get('/profile', (req, res) => {
  try {
    res.render('profile');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
