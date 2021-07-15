const User = require('./User');
const Pie = require('./Pie');
const Vote = require('./Vote');

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
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Vote.belongsTo(Pie, {
  foreignKey: 'user_id'
});

module.exports = { User, Pie, Vote };