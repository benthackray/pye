const router = require('express').Router();
const { User, Pie, Vote } = require('../../models');
var cloudinary = require('cloudinary').v2;

// set CLOUDINARY configuration
cloudinary.config({
  cloud_name: 'dx1djlhrd',
  api_key: '179755825786356',
  api_secret: 'mug5Y5TviNHcPjIox_kEdmfYTsk'
});


// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      profile_img: req.body.profile_img
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = dbUserData.id;
      req.session.profile = dbUserData.profile_img;
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Update username
router.put('/username', async (req, res) => {
  try {
    const dbUserData = await User.update({
      username: req.body.username,
    },{
      where: {id: req.session.userId}
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Update icon
router.put('/icon', async (req, res) => {
  cloudinary.uploader.upload( req.body.profile_img,
  { "tags": "basic_sample", "width": 400, "height": 400, "crop": "fit"},
  async function (err, image) {
    console.log();
    console.log("** Remote Url");
    if (err){ 
      res.status(400).json({message: "Not a valid url."});
    }else{
      try {
        const dbUserData = await User.update({
          profile_img: image.url,
        },{
          where: {id: req.session.userId}
        });
        res.status(200).json(dbUserData);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    }
  });
});

const bcrypt = require('bcrypt');

// Update password
router.put('/password', async (req, res) => {

  try {
    const dbUserData = await User.update({
      password: req.body.password,
    },{
      where: {id: req.session.userId},
      individualHooks: true
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = dbUserData.id;
      req.session.profile = dbUserData.profile_img;
      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});



module.exports = router;
