const Sequelize = require('sequelize')
const db = require('../db')
const {UUID, UUIDV4, INTEGER, STRING, TEXT} = Sequelize

const Queue = db.define('queue', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  songQueue: {
    type: TEXT
  }
})

module.exports = Queue