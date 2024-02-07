// const response = fetch('https://dog.ceo/api/breeds/image/random')

const fetch = require('node-fetch');
url = 'http://worldtimeapi.org/api/timezone/America/New_York'

async function getData() {
    const response = await fetch(url)
    console.log(response)
}

getData()