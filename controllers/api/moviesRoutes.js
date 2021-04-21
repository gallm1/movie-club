//take everything in movieRoutes and put it into homeRoutes
const router = require('express').Router();
const axios = require('axios');
//replace with dot.env notation later
const apiKey = 'dedaf40fb1cc1067cd388db10b3075ee'

//gets all movies
//ICEBOX: be able to sort movies
//this is grabs the data of movies
async function getMoviesAll() {
    let moviesURL = 'https://api.themoviedb.org/3/discover/movie?api_key=' + apiKey + '&language=en-US&sort_by=popularity.desc&page=1'
    try {
        const moviesAll = await axios.get(moviesURL);
        // getMoviesDetails(moviesAll.data.results);
        return moviesAll.data.results
    } catch (err) {
        console.error(err);
    }
}
<<<<<<< HEAD
router.get('/', async (req, res) => {
    const retrievedMovies = await getMoviesAll();
    const retrievedPosters = await getMoviesPoster();
    res.render('homepage', { movies: retrievedMovies, images: retrievedPosters });
});
=======

router.get('/', async(req, res) => {
    const retrievedMovies = await getMoviesAll();
    const retrievedPosters = await getMoviesPoster();
    res.render('homepage', { movies: retrievedMovies, images: retrievedPosters });
})
>>>>>>> 7a078d26e3c32b8c6dfa0d8011fe25b4c8c0c1f6


// need to show only posters
//being called in getMoviesAll to create complete movie poster
//this creates a full url for posterURL that we can append to HTML
async function getMoviesPoster(posterURL) {
    try {
        const moviePoster = await axios.get('https://image.tmdb.org/t/p/w185/' + posterURL)
            // console.log(moviePoster);
    } catch (err) {
        console.error(err);
    }
}

//this gets movie details, by movieID
//redirect user to movie website
async function getMoviesDetails() {
    //is there some way we can use append to response to make it easier?
    try {
        const movieDetails = await axios.get('https://api.themoviedb.org/3/movie/' + movieID + 'api_key=' + apiKey + '&language=en-US&')
    } catch (err) {
        console.error(err);
    }
}

//queries user search to search for movie 
//replace function params with user input later
async function searchMovieQuery() {
    let userSearch = process.argv[2];
    try {
        let moviesSearchURL = await axios.get('https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&language=en-US&query=' + userSearch + '&page=1&include_adult=false')
        console.log(moviesSearchURL.data.results);
    } catch (err) {
        console.error(err);
    }
}

module.exports = router;