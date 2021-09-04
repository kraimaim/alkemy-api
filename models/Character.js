

module.exports = (sequelize, type) => {
    return sequelize.define('character', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING,
        imagen: type.STRING,
        edad: type.INTEGER,
        peso: type.FLOAT,
        historia: type.TEXT,
        moviesparticipo: type.STRING
    },{
        timestamps:false
    })
}


