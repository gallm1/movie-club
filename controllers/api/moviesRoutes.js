const router = require('express').Router();
const axios = require('axios');
//replace with dot.env notation later
const apiKey = 'dedaf40fb1cc1067cd388db10b3075ee'

//gets all movies
//ICEBOX: be able to sort movies
//this is to show all movies in the homepage
async function getMoviesAll() {
    let moviesURL = 'https://api.themoviedb.org/3/discover/movie?api_key=' + apiKey + '&language=en-US&sort_by=popularity.desc'
    try {
        const moviesAll = await axios.get(moviesURL);
        for (const { title, poster_path } of moviesAll.data.results) {
            console.log(title, poster_path); //replace console.log with getMoviesPoster
        }
    } catch (err) {
        console.error(err);
    }
}

// need to show only posters
//being called in getMoviesAll
async function getMoviesPoster(posterURL) {
    try {
        const moviePoster = await axios.get('https://image.tmdb.org/t/p/w185/' + posterURL)
        console.log(moviePoster);
    } catch (err) {
        console.error(err);
    }
}

getMoviesAll();

