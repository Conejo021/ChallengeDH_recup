var express = require('express');
var router = express.Router();
var cancionesApiController =  require('../../controllers/api/cancionesApiController');

router.get('/', cancionesApiController.listado);
router.post('/', cancionesApiController.store);
router.get('/:id', cancionesApiController.show);
router.put('/:id', cancionesApiController.update);
router.delete('/:id', cancionesApiController.delete)



module.exports = router;
