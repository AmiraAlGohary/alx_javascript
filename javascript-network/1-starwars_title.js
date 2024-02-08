const requestStar = require('request');

const url4 = `https://swapi-api.alx-tools.com/api/films/${movieID}/`;

const movieID = process.argv[2];

requestStar.get(url4, (error, response, body) => {
    if (error) {
        console.error('error:', error)
        return;
    }
    
    const data = JSON.parse(body);
    const dataMovieName = data.title;
    console.log(dataMovieName);
}
);