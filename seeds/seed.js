const sequelize = require('../config/connection');
const { User, Pie, Vote } = require('../models')

const userData = require('./userData.json');
const postData = require('./pieData.json');
const commentData = require('./voteData.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Pie.bulkCreate(pieData, {
    individualHooks: true,
    returning: true,
  });

  await Vote.bulkCreate(voteData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedAll();