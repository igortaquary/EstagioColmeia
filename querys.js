module.exports = {
    film: {
        firstFilm: `query {
            films (order:releaseDate_ASC, limit:1){
              results{
                title
              }
            }
          }`,
    },
    character: {
        countMales: `query {
            characters (where: {gender:{ equalTo: "male"}}) {
                  count
            }
      }`,
        countFemales: `query {
            characters (where: {gender:{ equalTo: "female"}}) {
                  count
            }
      }`,
        heights: `query {
            characters(where:{height: {exists: true} }){
              results {
                name
                height
              }
            }
          }`,
        liveIn: (planeta) => `query {
            characters(where:{homeworld:{equalTo:"${planeta}"}}){
              count
            }
          }`,
    },
    specie: {
        shorterLifeSpan: `query {
            species (
              where: {averageLifespan: {exists: true} },
              order: [averageLifespan_ASC],
            ){
              results {
                name
                averageLifespan
              }
            }
          }`,
        speakersOf: (language) => `query {
            species(where: {language: {equalTo: "${language}"}}) {
              results{
                name
                people {
                  results {
                    name
                  }
                }
              }
            }
          }`,
    },
    planet: {
        mostPopular: `query {
            planets(order:[population_DESC], limit: 1){
            results{
              id
              name
            }
          }
        }`,
    }
}