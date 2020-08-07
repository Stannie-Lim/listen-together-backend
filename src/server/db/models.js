const db = require('./db')

// register models
const {
  Room,
  User,
  Queue
} = require('./models/relations')

module.exports = {
  db,
  Room,
  User,
  Queue
}