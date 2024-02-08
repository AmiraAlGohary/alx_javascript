const request = require('request');

const movieID = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieID}/`;

request.get(url, (error, response, body) => {
    if (error) {
        console.error('error:', error)
        return;
    }
    
    const film = JSON.parse(body);
    // const MovieCharacters = film.characters;
    // console.log(MovieCharacters);

    film.characters.forEach(characterUrl => {
        request.get(characterUrl, (charError, charResponse, charBody) => {
            if (charError) {
                console.error('Error:', charError);
            } else {
                const character = JSON.parse(charBody);
                console.log(character.name);
            }
        });
    });


});