let db = require('../database/models')
const Op = db.Sequelize.Op;

let peliculasController = {
    listado: function(req,res){
    db.Cancion.findAll()
    .then((canciones)=>{
        return res.status(200).json({
            total: canciones.length,
            data: canciones,
            status: 200,
            url: 'api/canciones/create'

        })
        
    })
    },

    show: function(req, res){
    db.Pelicula.findByPk(req.params.id)
    .then((pelicula)=>{
        return res.status(200).json({
            
            data: pelicula,
            status: 200,
            url: 'api/canciones/show'
        })
        
    })
    },

    store: function(req,res){
        db.Cancion.create(req.body)
        .then(canciones => {
        return res.status(200).json({
            data: canciones,
            status: 200,
            created:'ok',
            url: 'api/canciones/create'
        })
    })
    },

    update: function(req,res){
    db.Cancion.update({
        title: req.body.titulo,
        length: req.body.duracion,
        genre_id: req.body.genero,
        album_id: req.body.album,
        artista_id: req.body.artista,
    }, {
        where: {
            id:req.params.id
        }
    }). then((response) =>{
            res.json(response)
    })
    },
    delete: function(req,res){
    db.Cancion.destroy({
        where:{
            id: req.params.id,
        }
    })
    .then(confirm => {
        let respuesta

        if (confirm) {
            respuesta = {
                meta: {
                    status: 200,
                    total: confirm.length,
                    url: 'api/canciones/delete'
                },
                data: confirm
            }
        } else {
            respuesta = {
                meta: {
                    status: 204,
                    total: confirm.length,
                    url: 'api/canciones/delete'
                },
                data: confirm
            }
        }

        return res.json(respuesta)
    //.then((response)=>{
      //  return res.json(response)
    })
    },
}
//module.exports = cancionesApiController
