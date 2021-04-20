const router = require('express').Router();

// router.get('/', async(req, res) => {
//     res.render('./layouts/main', { layout: false });
// });

router.get('/', async(req, res) => {
    res.render('homepage', { layout: false });
});
module.exports = router;