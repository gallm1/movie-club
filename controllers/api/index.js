const router = require('express').Router();
const userRoutes = require('./userRoutes');
const reviewsRoutes = require('./reviewsRoutes');
const moviesRoutes = require('./moviesRoutes');

// router.use('/users', userRoutes);
// router.use('/reviews', reviewsRoutes);
router.use('/movies', moviesRoutes);

module.exports = router;
