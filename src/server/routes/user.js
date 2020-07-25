const axios = require('axios');
const router = require('express').Router();
require('dotenv').config();

// models
const { User, Room } = require('../db/models');

module.exports = router;

// root route is /api/user

router.get('/', async(req, res, next) => {
    res.send(await User.findAll());
});

router.post('/', async(req, res, next) => {
    const { id } = req.body;
    try {
        const newUser = await User.create({ id });
        res.send(newUser);
    } catch(err) {
        next(err);
    }
});

router.post('/join/:roomId', async(req, res, next) => {
    const { roomId } = req.params;
    const { id } = req.body;
    try {
        await User.update({ roomId }, { where: { id }});
        const user = await User.findByPk(id);
        res.send(user);
    } catch(err) {
        next(err);
    }
});

router.post('/leave', async(req, res, next) => {
    const { id } = req.body;
    try {
        await User.update({ roomId: null }, { where: { id }});
        const user = await User.findByPk(id);
        res.send(user);
    } catch(err) {
        next(err);
    }   
});