const querys = require('../querys');
const { default: fetch } = require('node-fetch');
const { TestScheduler } = require('jest');

const url = 'https://parseapi.back4app.com/graphql';
const headers = {
    'Content-Type': 'application/json',
    'X-Parse-Application-Id': 'Jl21MbJjOzHoq3eNjK0dY1cuRyQnOeu1GNIGQpY3',
    'X-Parse-REST-API-Key': 'o9tEdLcR2emLD8GUXgBvptiO6caiVMUJfHV9uYiE',
}

Object.values(querys).forEach(group => {
    Object.values(group).forEach(query => {
        if (typeof (query) == typeof ('')) {
            test(`Check te status from the ${group}.${query} query`, () => {
                fetch(url, {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify({
                        query: query
                    })
                }).then(res => expect(res.status).toBe(200))
            })
        }
    })
});