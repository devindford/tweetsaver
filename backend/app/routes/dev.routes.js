const controller = require('../controllers/dev.controllers');
const router = require('express').Router();

router.get('/version', controller.getVersion);

module.exports = router;
