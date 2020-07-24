const axios = require('axios');
const router = require('express').Router();
// require('dotenv').config();

// models
const { User } = require('../db/models');

module.exports = router;

// root route is /api/user

router.get('/', async(req, res, next) => {
    res.send(await User.findAll());
});

router.post('/', async(req, res, next) => {
    const { id } = req.body;
    try {
        const user = await User.findByPk(id);
        if(user) res.send(user);
        else {
            const newUser = await User.create({ id });
            res.send(newUser);
        }
    } catch(err) {
        next(err);
    }
});
