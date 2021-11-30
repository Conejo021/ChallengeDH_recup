module.exports = (sequelize, dataTypes) =>{
    let alias = 'Cancion';
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        titulo: {
            type: dataTypes.STRING,
            allowNull: true
        },
        duracion: {
            type: dataTypes.INTEGER,
            allowNull: true
        },
        genero_id: {
            type: dataTypes.INTEGER,
            allowNull: true
        },
               
        album_id: {
            type: dataTypes.INTEGER,
            allowNull: true
        },
        artista_id: {
            type: dataTypes.INTEGER,
            allowNull: true
        },
        
        
    };
    let config = {
        tableName: "canciones",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
        
        
    }
    const Cancion = sequelize.define(alias, cols, config);

    Cancion.associate = function(models){
        Cancion.belongsTo(models.Album,{
            as: "albums",
            foreignKey: "album_id"
        });
    }
        Cancion.associate = function(models){
            Cancion.belongsTo(models.Genero,{
                as: "generos",
                foreignKey: "genero_id"
            });
    }
            Cancion.associate = function(models){
                Cancion.belongsTo(models.Artista,{
                    as: "artistas",
                    foreignKey: "artista_id"
                });
            }
    return Cancion;


}