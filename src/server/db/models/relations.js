const Room = require('./Room');
const User = require('./User');

Room.belongsTo(User, { as: 'admin' });

module.exports = {
    Room,
    User
}