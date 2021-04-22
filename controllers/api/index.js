const router = require('express').Router();
const userRoutes = require('./userRoutes');
const reviewsRoutes = require('./reviewsRoutes');

router.use('/users', userRoutes);
router.use('/reviews', reviewsRoutes);

module.exports = router;