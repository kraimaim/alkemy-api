

// module.exports = (sequelize, type) => {
//     return sequelize.define('genre', {
//         id:{
//             type: type.INTEGER,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         nombre: type.STRING,
//         imagen: type.STRING
//     },{
//         timestamps:false
//     })
// }

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class Genre extends Model{}
Genre.init({
    id:{
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                nombre: DataTypes.STRING,
                imagen: DataTypes.STRING
            },{
                sequelize,
                modelName:"genero",
                timestamps:false
            }) 

            module.exports = Genre