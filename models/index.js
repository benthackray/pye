const User = require('./user');
const Pie = require('./pie');
const Vote = require('./vote');

User.hasMany(Pie, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Pie.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Vote, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Vote.belongsTo(User, {
  foreignKey: 'user_id'
});

Pie.hasMany(Vote, {
  foreignKey: 'pie_id',
  onDelete: 'CASCADE'
});

Vote.belongsTo(Pie, {
  foreignKey: 'pie_id'
});

module.exports = { User, Pie, Vote };