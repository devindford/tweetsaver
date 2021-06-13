const controller = require('../controllers/users.controllers.js');
const router = require('express').Router();

// CRUD operations

router
  .get('/', controller.getAll)
  .get('/:id', controller.getOne)
  .post('/', controller.createOne)
  .put('/:id', controller.updateOne)
  .delete('/:id', controller.deleteOne);

module.exports = router;
