module.exports = function ( sequelize, dataTypes){
    let alias = "Artista";
    let cols={
        id:{
            type: dataTypes.INTEGER,
            primaryKey : true,
            allowNull : false,
        },
        nombre:{
            type:dataTypes.STRING,
            allowNull: true,
        },
        apellido:{
            type:dataTypes.INTEGER,
            allowNull: true,
        },

    };
    let config = {
        tableName:"artistas",
        timestamps: false
    }
    let Artista = sequelize.define(alias,cols,config);

    Artista.associate = function(models){
        Artista.hasMany(models.Cancion,{
            as: "canciones",
            foreignKey: "artista_id"
        });
   };
return Artista
};
