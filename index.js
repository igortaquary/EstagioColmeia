const fetch = require('node-fetch');
const querys = require('./querys');
const csvCreator = require('./csvCreator');
const { planet } = require('./querys');

const questions = [
    'Nome do primeiro filme lancado',
    'Especies que vivem menos tempo em media',
    'Quantos personagens de cada genero (M/F)',
    'Altura media dos personagens',
    'Personagens que falam a lingua Gungan basic',
    'Quantos personagens vivem no planeta mais populoso'
];
const data = [];

main();

async function main() {

    /* Question 1 */
    await queryFetch(querys.film.firstFilm)
        .then(json => json.data.films.results)
        .then(names => data.push(names[0].title));

    /* Question 2 */
    await queryFetch(querys.specie.shorterLifeSpan)
        .then(json => json.data.species.results)
        .then(results => results.filter(element => element.averageLifespan != null)) //double check
        .then(results => results.slice(0, 3).map(e => e.name).toString())
        .then(string => data.push(string));

    /* Question 3 */
    let q3 = '';
    await queryFetch(querys.character.countMales)
        .then(json => json.data.characters.count)
        .then(num => q3 += 'M:' + num);
    await queryFetch(querys.character.countFemales)
        .then(json => json.data.characters.count)
        .then(num => {
            q3 += ', F:' + num;
            data.push(q3);
        })

    /* Question 4 */
    await queryFetch(querys.character.heights)
        .then(json => json.data.characters.results)
        .then(results => results.map(char => char.height))
        .then(heights => (heights.reduce((total, height) => total + height, 0)) / heights.length)
        .then(media => data.push((media / 100).toFixed(2)))

    /* Question 5 */
    await queryFetch(querys.specie.speakersOf('Gungan basic'))
        .then(json => json.data.species.results[0].people.results)
        .then(results => results.map(people => people.name))
        .then(names => data.push(names.toString()))

    /* Question 6 */
    await queryFetch(querys.planet.mostPopular)
        .then(json => json.data.planets.results[0])
        .then(planet => queryFetch(querys.character.liveIn(planet.id)))
        .then(results => data.push(results.data.characters.count))

    csvCreator('Answers', questions, data);
}

function queryFetch(query) {
    return (
        fetch('https://parseapi.back4app.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Parse-Application-Id': 'Jl21MbJjOzHoq3eNjK0dY1cuRyQnOeu1GNIGQpY3',
                'X-Parse-REST-API-Key': 'o9tEdLcR2emLD8GUXgBvptiO6caiVMUJfHV9uYiE',
            },
            body: JSON.stringify({
                query: query
            })
        })
            .then(res => res.json())
    )
}

