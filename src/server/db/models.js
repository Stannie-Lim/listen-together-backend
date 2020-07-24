const db = require('./db')

// register models
const {
  Room
} = require('./models/relations')

module.exports = {
  db,
  Room
}