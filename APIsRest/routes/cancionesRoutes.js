var express = require('express');
var router = express.Router();
var cancionesController =  require('../controllers/cancionesController');

 router.get('/crear', cancionesController.crear)
 router.post('/crear', cancionesController.guardar);
 router.get('/detalle/:id', cancionesController.detalle);
 router.get('/editar/:id', cancionesController.editar);
 router.post('/editar/:id', cancionesController.actualizar);
 router.post('/borrar/:id', cancionesController.borrar);



module.exports = router;