const express = require('express');
const controller = require('../controllers/results')
const router = express.Router();

router.get('/:n1/:n2', controller.sum);
router.post('/', controller.multiply);
router.put('/', controller.divide);
router.patch('/', controller.power);
router.delete('/:n1/:n2', controller.substract);

module.exports = router;
