const sequelize = require('sequelize')
const {Character} = require('./database/db')
const {Genre} = require('./database/db')
const {Movie} = require('./database/db')


module.exports = (sequelize, type) => {
    return sequelize.define('charactermovie', {
    MovieId: {
      type: type.INTEGER,
      references: {
        model: Movie,
        key: 'id'
      }
      
    },
    CharacterId: {
      type: type.INTEGER,
      references: {
        model: Character,
        key: 'id'
      }
    },
  
})

}

module.exports = (sequelize, type) => {
    return sequelize.define('genremovie', {
    MovieId: {
      type: type.INTEGER,
      references: {
        model: Movie, 
        key: 'id'
      }
      
    },
    CharacterId: {
      type: type.INTEGER,
      references: {
        model: Genre, 
        key: 'id'
      }
    },
  
})

}

Movie.belongsToMany(Character, { through: 'charactermovie' })
Character.belongsToMany(Movie, { through: 'charactermovie' })
Movie.belongsToMany(Genre, { through: 'genremovie' })
Genre.belongsToMany(Movie, { through: 'genremovie' })
