var express = require('express');
var router = express.Router();

router.get('/:n1/:n2', function (req, res, next) {
  const n1 = req.params.n1;
  const n2 = req.params.n2;
  res.render('index', { title: 'Express' });
});
router.post({}, function (req, res, next) {
  req
  res.render('index', { title: 'Express' });
});
router.put({}, function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.delete('/:n1/:n2', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
