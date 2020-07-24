const db = require('./db')

// register models
const {
  Room,
  User
} = require('./models/relations')

module.exports = {
  db,
  Room,
  User
}