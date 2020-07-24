const axios = require('axios');
const router = require('express').Router();
require('dotenv').config();

// models
const { Room } = require('../db/models');

module.exports = router;

// root route is /api/room

router.post('/', async(req, res, next) => {
    const { id } = req.body;
    res.send(await Room.findAll());
});