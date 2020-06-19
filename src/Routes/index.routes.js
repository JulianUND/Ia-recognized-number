const {Router} = require('express');
const router = Router();
const {getinfo,prueba} = require('../Controllers/index.controller')

router.get('/keras',getinfo)
router.get('/data', prueba)

module.exports = router;