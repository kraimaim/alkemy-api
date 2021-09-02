// const sequelize = require('sequelize')
// const Character = require('./models/Character')
// const Genre = require('./models/Genre')
// const Movie = require('./models/Movie')


// module.exports = (sequelize, type) => {
//     return sequelize.define('charactermovie', {
//     MovieId: {
//       type: type.INTEGER,
//       references: {
//         model: Movie, // 'Movies' would also work
//         key: 'id'
//       }
//     },
//     CharacterId: {
//       type: type.INTEGER,
//       references: {
//         model: Character, // 'Actors' would also work
//         key: 'id'
//       }
//     }
    
//   });
//   Movie.belongsToMany(Character, { through: charactermovie })
//   Character.belongsToMany(Movie, { through: charactermovie })
// }
