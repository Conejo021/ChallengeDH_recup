const db = require('../database/models');
const sequelize = db.sequelize;


const generosController = {
    'list': (req, res) => {
        db.Genero.findAll()
            .then(genres => {
                res.render('generosList.ejs', {generos})
            })
    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genero => {
                res.render('generosDetail.ejs', {genero});
            });
    }

}

module.exports = generosController;