const router = require('express').Router();
const { Review, User } = require('../models');
//const withAuth = require('../utils/auth');

// require models
//require auth
// i think this is the routes for a registered user?

router.get('/', async(req, res) => {
    try {
        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;