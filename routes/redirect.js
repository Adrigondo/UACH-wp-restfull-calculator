const express = require('express');
const controller=require('../controllers/redirect')
const router = express.Router();

router.get('/',controller.myRedirect);
router.post('/',controller.myRedirect);
router.put('/',controller.myRedirect);
router.patch('/',controller.myRedirect);
router.delete('/', controller.myRedirect);

module.exports = router;