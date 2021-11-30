module.exports = function ( sequelize, dataTypes){
    let alias = "Genero";
    let cols={
        id:{
            type: dataTypes.INTEGER,
            primaryKey : true,
            allowNull : false,
        },
        name:{
            type:dataTypes.STRING,
            allowNull: true,
        },
        

    };
    let config = {
        tableName:"generos",
        timestamps: false
    }
    let Genero = sequelize.define(alias,cols,config);

    Genero.associate = function(models){
        Genero.hasMany(models.Cancion,{
            as: "canciones",
            foreignKey: "genero_id"
        });
    }
    return Genero;
}