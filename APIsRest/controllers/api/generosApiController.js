const db = require('../../database/models');

module.exports = {
    list: (req,res) => {
        db.Genero.findAll()
      
        .then(generos => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: generos.length,
                    url: 'api/generos'
                },
                data: generos
            }

           return res.json(respuesta)
        }).catch(error=>res.send(error))
    },
    generosCanciones: (req, res) => {
        //const id=req.params.id;
        db.Genero.findByPk(req.params.id,{
            include: ['canciones']
        })
            .then(generos => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: generos.length,
                        url: '/api/generos/:id/canciones'
                    },
                    data: generos
                }
                return res.json(respuesta);
            }).catch(error=>res.send(error))
    },
}
//module.exports = generosApiController;