// const response = fetch('https://dog.ceo/api/breeds/image/random')

// import fetch from 'node-fetch';

const url = 'http://worldtimeapi.org/api/timezone/America/New_York'

async function getData() {
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

getData()
// -----------------------

const url2 = 'http://worldtimeapi.org/api/timezone/America/New_York'

async function get_Data() {
    try {
        const request = new Request(url2, {
            headers: {
                'Authorization': 'something'
            }
        })
        const resp = await fetch(request);
        const data = await resp.json();
        console.log(data)
    } catch(error) {
        console.error('Error:', error);
    }
}

// -----------------------

const url3 = 'http://worldtimeapi.org/api/timezone/America/New_York'

const request = new Request(url3, {
    headers: {
        'Authorization': 'something'
    }
})

fetch(request)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error))

















