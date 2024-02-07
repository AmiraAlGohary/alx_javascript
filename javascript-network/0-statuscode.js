const req = require('request');

const url = process.agrv[1];

req.get(url, (error, response) => {
    if (error) {
        console.error('error:', error);
        return;
    }
    console.log('code:', response.statusCode);
})
