const express = require('express');
const router = express.Router();
const footballerController = require('../controllers/footballer');

router.use(function(req, res, next) {
  console.log('Something is happening.');
  next();
});

router.route('/')
	.post(footballerController.save)
	.get(footballerController.getAll);

router.route('/:footballer_id')
  .get(footballerController.getOne)
  .put(footballerController.update)
  .delete(footballerController.remove);

module.exports = router;
