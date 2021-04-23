//take everything in movieRoutes and put it into homeRoutes
const router = require('express').Router();
const axios = require('axios');
//replace with dot.env notation later
const apiKey = 'dedaf40fb1cc1067cd388db10b3075ee'

// need to show only posters
//being called in getMoviesAll to create complete movie poster
//this creates a full url for posterURL that we can append to HTML
// called in getMoviesAll()
async function getMoviesPoster(posterURL) {
    try {
        const moviePoster = await axios.get('https://image.tmdb.org/t/p/w185/' + posterURL)
            // console.log(moviePoster);
    } catch (err) {
        console.error(err);
    }
}

//gets all movies
//ICEBOX: be able to sort movies
//this is grabs the data and posters of movies
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
router.get('/', async(req, res) => {
    const retrievedMovies = await getMoviesAll();
    const retrievedPosters = await getMoviesPoster();
    const MovieOfTheWeek = await weeklyMovie();
    res.render('homepage', { movies: retrievedMovies, images: retrievedPosters, weekly: MovieOfTheWeek });
});

//create another get for an individual movie, or selected movie 
async function oneMovie(MovieID) {
    let selectedMovie = 'https://api.themoviedb.org/3/movie/' + MovieID + '?api_key=' + apiKey + '&language=en-US&'
    try {
        const moviesData = await axios.get(selectedMovie);
        // console.log{ id, title, overview, poster_path, release_date, tagline, vote_average };
        const { id, title, overview, poster_path, release_date, tagline, vote_average } = moviesData.data;
        return { id, title, overview, poster_path, release_date, tagline, vote_average }
    } catch (err) {
        console.error(err);
    }
}
router.get('/movie/:id', async(req, res) => {
    const retrievedMovieDetails = await oneMovie(req.params.id);
    console.log(retrievedMovieDetails)
    res.render('reviews', retrievedMovieDetails);
});

async function weeklyMovie() {
    let randomMovie = 'https://api.themoviedb.org/3/discover/movie?api_key=' + apiKey + '&language=en-US&sort_by=popularity.desc&page=' + randomPageNumber(500);
    try {
        const pageObj = await axios.get(randomMovie);
        // console.log(pageObj.data.results[randomPageNumber(pageObj.data.results.length)]);
        return 'reviews', pageObj.data.results[randomPageNumber(pageObj.data.results.length)]
    } catch (err) {
        console.error(err);
    }
}

function randomPageNumber(max) {
    let randomPageInt = Math.floor(Math.random() * max) + 1;
    // console.log(randomPageInt);
    return randomPageInt
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