// Write a script that gets the contents of a webpage and stores it in a file.

// The first argument is the URL to request
// The second argument the file path to store the body response


const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePatch = process.argv[3];

function getContactAndSaveToFile(url, filePatch) {
    request.get({url: url, encoding: 'utf-8'}, (error, response, body) => {
        if (error) {
            console.error('Error', error);
        
        } else if (response.statusCode !== 200) {
            console.error('Error:', 'Failed to retrieve webpage. Status code:', response.statusCode);
        } else {
            fs.writeFile(filePatch, body, {encoding: 'utf-8'}, (err) => {
                if (err) {
                    console.error('Error:', err);
                } else {
                    // console.log(filePatch);
                }
            });
        }
    });

}

getContactAndSaveToFile(url, filePatch);


