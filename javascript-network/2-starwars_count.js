const requestStar = require('request');

// const url5 = 'https://swapi-api.alx-tools.com/api/films/'
const url5 = process.argv[2];

requestStar.get('https://swapi-api.alx-tools.com/api/people/18', (error, response, body) => {
    if (error) {
        console.error('error:', error)
        return;
    }
    
    const data = JSON.parse(body);
    const theMovies = data.films;
    const noOfMovies = films.length
    console.log(noOfMovies);
    
}
);