const Sequelize = require('sequelize')

const MovieModel = require('../models/Movie')
const UserModel = require('../models/User')
const CharacterModel = require('../models/Character')
const GenreModel = require('../models/Genre')


const sequelize = new Sequelize('X8fOhDOaim','X8fOhDOaim','BueRyyWGr7',{host:'remotemysql.com', dialect: 'mysql'})

const Movie = MovieModel(sequelize, Sequelize)
const User = UserModel(sequelize, Sequelize)
const Character = CharacterModel(sequelize, Sequelize)
const Genre = GenreModel(sequelize, Sequelize)

sequelize.sync({force:false})
    .then(() =>{
        console.log('tablas sincronizadas')
    })

    module.exports = {
        Movie,
        User,
        Genre,
        Character
    }

