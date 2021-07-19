const router = require('express').Router();
const { User, Pie, Vote } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');


// GET for homepage
router.get('/', withAuth ,async (req, res) => {
  try {
    const pieData = await Pie.findAll({
      limit: 6,
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

router.get('/both/:name/:category', withAuth ,async (req, res) => {
  try {
    const pieData = await Pie.findAll({
      limit: 6,
      include: [
          {
              model: User
          }
      ],
      where: {
        name: sequelize.where(sequelize.fn('LOWER', sequelize.col('name')), 'LIKE', '%' + req.params.name.toLocaleUpperCase() + '%'),
        category: req.params.category
      }
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

router.get('/name/:name', withAuth ,async (req, res) => {
  try {
    const pieData = await Pie.findAll({
      limit: 6,
      include: [
          {
              model: User
          }
      ],
      where: {
        name: sequelize.where(sequelize.fn('LOWER', sequelize.col('name')), 'LIKE', '%' + req.params.name.toLocaleUpperCase() + '%'),
      }
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

router.get('/category/:category', withAuth ,async (req, res) => {
  try {
    const pieData = await Pie.findAll({
      limit: 6,
      include: [
          {
              model: User
          }
      ],
      where: {
        category: req.params.category
      }
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

// GET for starting menu
router.get('/menu', async (req, res) => {
  try {
    res.render('menu', {layout: false});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET for a particular pie
router.get('/pie/:id', async (req, res) => {
  try {
    const pieData = await Pie.findByPk(req.params.id,{
        include: [
            {
              model: User
            },
            {
              model: Vote,
              include: [{model: User}]
            }
        ],
    });
    const data = pieData.get({ plain: true });
    data.labels = JSON.parse(data.labels);
    data.data = JSON.parse(data.data);
    res.render('pie', {data, loggedIn: req.session.loggedIn});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET for login
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
router.get('/profile', async (req, res) => {
  try {
    console.log(req.session.userId);
    const userData = await User.findByPk(req.session.userId,{
        include: [
            {
                model: Pie
            }
        ],
    });
    const data = userData.get({ plain: true });
    res.render('profile', {data, loggedIn: req.session.loggedIn});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Change Password page




module.exports = router;
