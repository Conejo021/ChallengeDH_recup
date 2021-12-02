const express = require('express');
const router = express.Router();
const generosApiController = require('../../controllers/api/generosApiController');

router.get('/generos', generosApiController.list);



module.exports = router;