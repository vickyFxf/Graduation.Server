var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'hahaExpress' });//render渲染，之前视图引擎已经规定了类型，所以我们不需再加.ejs
});
module.exports = router;
