const axios = require('axios');
const router = require('express').Router();
require('dotenv').config();

// models
const { Room, Queue } = require('../db/models');

// root route is /api/queue
module.exports = router;

router.get('/:id', async(req, res, next) => {
    const { id } = req.params;
    try {
        res.send((await Queue.findByPk(id)).songQueue);
    } catch(err) {
        next(err);
    }
});

router.get('/get/all', async(req, res, next) => {
    res.send(await Queue.findAll());
});

router.post('/:roomId', async(req, res, next) => {
    const { roomId } = req.params;
    const { queue } = req.body;
    try {
        let stuff = await Queue.findOne({ where: { roomId }});
        if(!stuff) {
            stuff = await Queue.create({ roomId });
        }
        await stuff.update({ songQueue: queue });
        res.send(stuff);
    } catch(err) {
        next(err);
    }
});