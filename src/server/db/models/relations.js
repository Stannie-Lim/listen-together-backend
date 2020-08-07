const Room = require('./Room');
const User = require('./User');
const Queue = require('./Queue');

User.belongsTo(Room);
Room.hasMany(User);
Queue.belongsTo(Room);
Room.hasOne(Queue);

module.exports = {
    Room,
    User,
    Queue
}