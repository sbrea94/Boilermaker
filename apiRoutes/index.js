const router = require('express').Router();

router.use('/chips', require('./chips'));

router.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
