// Write a script that gets the contents of a webpage and stores it in a file.

// The first argument is the URL to request
// The second argument the file path to store the body response


const requestStar = require('request');
const fs = require('fs');

const url6 = process.argv[2];
const filePatch = process.argv[3];

function getContactAndSaveToFile (url6, filePatch) {
    if (error) {
        console.error('Error', error);

    } else if (response.statusCode !== 200) {
        console.error('Error:', 'Failed to retrieve webpage. Status code:', response.statusCode);
    } else {
        fs.writeFile(filePatch, body, {encoding: 'utf-8'}, (err) => {
            if (err) {
                console.error('Error:', err);
            } else {
                console.log('Content saved to file:', filePatch);
            }
        });
    }
}

getContactAndSaveToFile (url6, filePatch);