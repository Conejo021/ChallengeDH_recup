let db = require('../database/models')
const Op = db.Sequelize.Op;

let cancionesController = {
    crear: function(req, res){
        db.Genero.findAll()
            .then((generos)=>{
                return res.render('crearCanciones', {
                    generos: generos,
                })
            })
    },
    
    guardar: function(req,res){
        db.Cancion.create({
            title: req.body.titulo,
            awards: req.body.premio,
            release_date: req.body.fecha_lanzamiento,
            genre_id: req.body.genero,
            length: req.body.duracion,
            rating: req.body.rating,
        });
        // res.send(req.body)
        res.redirect('/canciones')
    },
    
    
    detalle: function(req,res){
        db.Cancion.findByPk(req.params.id,
            {
                include:[
                    {association:"artistas"},
                    {association:"generos"},
                ]
            })
        .then((detalle)=>{
            return res.render('detalleCancion',{
                pelicula: detalle,
            })
        })
    },

    editar: function(req, res){
        
        let pedidoCancion = db.Cancion.findByPk(req.params.id)
        let pedidoGenero = db.Genero.findAll()

        Promise.all([pedidoCancion, pedidoGenero])
        .then(([canciones,generos])=>{
            
            res.render("editarCancion",{
                canciones: canciones,
                generos: generos,
            })
        })
    },

    actualizar:function(req,res){
        db.Cancion.update({
            title: req.body.titulo,
            genre_id: req.body.genero,
            length: req.body.duracion,
            album_id: req.body.album,
            artista_id: req.body.artista,
        }, {
            where: {
                id:req.params.id
            }
        });

        
        res.redirect('/canciones/detalle/' + req.params.id)
    },
    borrar: function(req,res){
        db.Cancion.destroy({
            where:{
                id: req.params.id,
            }
        });

        res.redirect('/canciones')
    }

}

module.exports = cancionesController