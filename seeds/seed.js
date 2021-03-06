const sequelize = require('../config/connection');
const { User, Pie } = require('../models')

const userData = require('./userData.json');
const pieData = require('./pieData.json');
// const commentData = require('./voteData.json');

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

  process.exit(0);
};

seedAll();