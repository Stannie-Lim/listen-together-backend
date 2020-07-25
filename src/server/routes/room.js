const axios = require('axios');
const router = require('express').Router();
// require('dotenv').config();

// models
const { Room, User } = require('../db/models');

module.exports = router;

// root route is /api/room

router.get('/:id', async(req, res, next) => {
    const { id } = req.params;
    try {
        res.send(await Room.findAll({ 
            where: { id },
            include: User
        }));
    } catch(err) {
        next(err);
    }
});

router.get('/get/all', async(req, res, next) => {
    try {
        res.send(await Room.findAll());
    } catch(err) {
        next(err);
    }
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