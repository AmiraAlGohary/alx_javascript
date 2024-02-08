const request = require('request');

const movieID = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieID}/`;

request.get(url, (error, response, body) => {
    if (error) {
        console.error('error:', error)
        return;
    }
    
    const data = JSON.parse(body);
    const MovieCharacters = data.characters;
    console.log(MovieCharacters);
}
);