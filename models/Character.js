

// module.exports = (sequelize, type) => {
//     return sequelize.define('character', {
//         id:{
//             type: type.INTEGER,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         nombre: type.STRING,
//         imagen: type.STRING,
//         edad: type.INTEGER,
//         peso: type.FLOAT,
//         historia: type.TEXT
//     },{
//         timestamps:false
//     })
// }

const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database/db')

class Character extends Model{}
Character.init({
    id:{
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                nombre: DataTypes.STRING,
                imagen: DataTypes.STRING,
                edad: DataTypes.INTEGER,
                peso: DataTypes.FLOAT,
                historia: DataTypes.TEXT
            },{
                timestamps:false
            })
