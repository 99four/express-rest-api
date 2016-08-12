const express = require('express');
const router = express.Router();
const bearController = require('../controllers/bear');

router.use(function(req, res, next) {
  console.log('Something is happening.');
  next();
});

router.route('/')
	.post(bearController.save)
	.get(bearController.getAll);

router.route('/:bear_id')
  .get(bearController.getOne)
  .put(bearController.update)
  .delete(bearController.remove);

module.exports = router;