const db = require('../database/models');

module.exports = {
    list: (req,res) => {
        db.Genero.findAll()
        include:[
            {association:"canciones"},
                    ]

        .then(generos => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: genres.length,
                    url: 'api/generos'
                },
                data: generos
            }

           return res.json(respuesta)
        })
    }
}
//module.exports = generosApiController;