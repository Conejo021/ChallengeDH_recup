const express = require('express');
const router = express.Router();
const generosApiController = require('../../controllers/api/generosApiController');

router.get('/', generosApiController.list);
router.get('/:id/canciones', generosApiController.generosCanciones);



module.exports = router;