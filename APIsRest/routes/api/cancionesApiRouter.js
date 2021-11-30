var express = require('express');
var router = express.Router();
var cancionesApiController =  require('../controllers/api/cancionesApiController');

router.get('/', cancionesApiController.listado);
router.post('/', cancionesApiController.store);
router.get('/:id', cancionesApiController.show);
router.put('/:id', cancionesApiController.update);
router.delete('/:id', cancionesApiController.delete)

/* Creacion de canciones */
//router.get("/crear", cancionesApiController.crear);
//router.post("/crear", cancionesApiController.guardado);
//lectura
//router.get("/",cancionesApiController.listado);

//detalle
//router.get("/:id" , cancionesApiController.detalle);
//actualizacion
//router.get("/editar/:id", cancionesApiController.editar);
//router.put("/editar/:id", cancionesApiController.actualizar);
//borrado
//router.post("/borrar/:id", cancionesApiController.borrar);



module.exports = router;
