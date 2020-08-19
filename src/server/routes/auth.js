const qs = require('qs')
const axios = require('axios');
const router = require('express').Router();
// require('dotenv').config();

module.exports = router;

// root route is /api/auth

router.get('/', async(req, res, next) => {
    res.send({
        REDIRECT_URI: process.env.REDIRECT_URI,
        CLIENT_ID: process.env.CLIENT_ID,
        CLIENT_SECRET: process.env.CLIENT_SECRET
    });
});

router.post('/login', async(req, res, next) => {
    const { code, url } = req.body;
    const body = {
        code,
        grant_type: "authorization_code",
        redirect_uri: url,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET
    };
    try {
        const token = (await axios.post(`https://accounts.spotify.com/api/token`, qs.stringify(body), { 
            headers: { 
            'Content-Type': 'application/x-www-form-urlencoded'
        }})).data;
        res.send(token);
    } catch(err) {
        next(err);
    }
});

router.get('/me', async(req, res, next) => {
    const { authorization } = req.headers;
    try {
        const { data } = (await axios.get('https://api.spotify.com/v1/me', { headers: { 'Authorization': `${authorization}` } }));
        res.send(data);
    } catch(err) {
        next(err);
    }
});