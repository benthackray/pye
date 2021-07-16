const router = require('express').Router();

const userRoutes = require('./user-routes');
const pieRoutes = require('./pie-routes');
const voteRoutes = require('./vote-routes');

router.use('/user', userRoutes);
router.use('/pie', pieRoutes);
router.use('/vote', voteRoutes);

module.exports = router;