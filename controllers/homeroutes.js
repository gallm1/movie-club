const router = require('express').Router();
//const { movies, User } = require('../models');
//const withAuth = require('../utils/auth');

// require models
//require auth
// i think this is the routes for a registered user?

// router.get('/', async(req, res) => {
//     res.render('./layouts/main', { layout: false });
// });
//router.get('/', withAuth , async(req, res) => {
router.get('/', async(req, res) => {
    try {
        // res.render('homepage', { movies });
        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;