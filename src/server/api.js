const router = require('express').Router();
module.exports = router;

// root route is '/api'
router.use('/auth', require('./routes/auth'));
router.use('/room', require('./routes/room'));