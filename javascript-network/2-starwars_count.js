const requestStar = require('request');

const url5 = process.argv[2];
const characterId = 18;

requestStar.get(url5, (error, response, body) => {
    if (error) {
        console.error('error:', error)
        return;
    }
    
    const data = JSON.parse(body);
    const moviesWithWedge = data.results.filter(film => film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`));
    
    const noOfMovies = moviesWithWedge.length
    console.log(noOfMovies);
}
);