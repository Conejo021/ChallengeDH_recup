const db = require('../../database/models');

module.exports = {
    list: (req,res) => {
        db.Genero.findAll()
       // include:[
          // {association:"canciones"},
            //       ]

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
    }
}
//module.exports = generosApiController;