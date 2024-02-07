const req = require('request');

const url = process.argv[2];

req.get(url, (error, response) => {
    if (error) {
        console.error('error:', error);
        return;
    }
    console.log('code:', response.statusCode);
});