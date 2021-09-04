
module.exports = (sequelize, type) => {
    return sequelize.define('movie', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: type.STRING,
        imagen: type.STRING,
        calificacion: type.INTEGER,
        fechalanzamiento: type.DATE,
        personajes: type.STRING
    },{
        timestamps:false
    })
}