module.exports = function ( sequelize, dataTypes){
    let alias = "Album";
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
        duracion:{
            type:dataTypes.INTEGER,
            allowNull: true,
        },

    };
    let config = {
        tableName:"albumes",
        timestamps: false
    };
    let Album = sequelize.define(alias,cols,config);

    Album.associate = function(models){
        Album.hasMany(models.Cancion,{
            as: "canciones",
            foreignKey: "album_id"
        });
     };
 return Album
}
