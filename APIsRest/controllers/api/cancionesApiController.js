let db = require('../../database/models')
const Op = db.Sequelize.Op;

let cancionesApiController = {
    listado: function(req,res){
    db.Cancion.findAll()
    .then((canciones)=>{
        return res.status(200).json({
            total: canciones.length,
            data: canciones,
            status: 200,
            url: 'api/canciones'

        })
        
    }).catch(error=>res.send(error))
    },

    show: function(req, res){
        const id=req.params.id;
    db.Cancion.findByPk(id)
    .then((canciones)=>{
        return res.status(200).json({
            
            data: canciones,
            status: 200,
            url: 'api/canciones/:id'
        })
        
    })
    },

    store: function(req,res){
        db.Cancion.create({
            titulo: req.body.titulo,
            duracion: req.body.duracion,
            genero_id: req.body.genero_id,
            album_id: req.body.album_id,
            artista_id: req.body.artista_id,
        })
        .then(canciones => {
        return res.status(200).json({
            data: canciones,
            status: 200,
            created:'ok',
            url: 'api/canciones/'
        })
    }).catch(error=>res.send(error))
    },

    update: function(req,res){
    db.Cancion.update({
        titulo: req.body.titulo,
        duracion: req.body.duracion,
        genero_id: req.body.genero_id,
        album_id: req.body.album_id,
        artista_id: req.body.artista_id,
    }, {
        where: {
            id:req.params.id
        }
    }). then((response) =>{
            res.json(response)
    }).catch(error=>res.send(error))
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
module.exports = cancionesApiController
