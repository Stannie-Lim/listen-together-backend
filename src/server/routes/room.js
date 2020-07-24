const axios = require('axios');
const router = require('express').Router();
// require('dotenv').config();

// models
const { Room } = require('../db/models');

module.exports = router;

// root route is /api/room

router.get('/', async(req, res, next) => {
    res.send(await Room.findAll());
});

router.post('/', async(req, res, next) => {
    const { id } = req.body;
    try {
        const room = await Room.create({ roomCode: Math.random().toString(36).substring(7), adminId: id });
        res.send(room);
    } catch(err) {
        next(err);
    }
});