// const Sequelize = require('sequelize')

// const MovieModel = require('./models/Movie')
// const UserModel = require('./models/User')
// const CharacterModel = require('./models/Character')
// const GenreModel = require('./models/Genre')


// const sequelize = new Sequelize('X8fOhDOaim','X8fOhDOaim','BueRyyWGr7',{host:'remotemysql.com', dialect: 'mysql'})

// const Movie = MovieModel(sequelize, Sequelize)
// const User = UserModel(sequelize, Sequelize)
// const Character = CharacterModel(sequelize, Sequelize)
// const Genre = GenreModel(sequelize, Sequelize)

// sequelize.sync({force:false})
//     .then(() =>{
//         console.log('tablas sincronizadas')
//     })

//     module.exports = {
//         Movie,
//         User,
//         Genre,
//         Character
//     }

const {Sequelize} = require('sequelize')
const {database} = require('./config')

const sequelize = new Sequelize(
    database.database,
    database.username,
    database.password, {
        host: database.host,
        dialect: "mysql"
    }
);

module.exports = sequelize;