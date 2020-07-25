const Room = require('./Room');
const User = require('./User');

User.belongsTo(Room);
Room.hasMany(User);

module.exports = {
    Room,
    User
}