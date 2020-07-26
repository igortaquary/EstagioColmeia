const fetch = require('node-fetch');
const querys = require('../querys');

const url = 'https://parseapi.back4app.com/graphql';
const headers = {
    'Content-Type': 'application/json',
    'X-Parse-Application-Id': 'Jl21MbJjOzHoq3eNjK0dY1cuRyQnOeu1GNIGQpY3',
    'X-Parse-REST-API-Key': 'o9tEdLcR2emLD8GUXgBvptiO6caiVMUJfHV9uYiE',
}

test('Check if the server is responding a query character request', () => {
    fetch(url, {
        method: 'POST',
        headers: headers,
        body: {
            query: JSON.stringify(querys.character.countMales),
        }
    })
        .then(res => expect(res.status).toBe(400))
}
)

test('Check if the server is responding a bad query request', () => {
    fetch(url, {
        method: 'POST',
        headers: headers,
        body: {
            query: ``,
        }
    })
        .then(res => expect(res.status).toBe(400))
}
)

