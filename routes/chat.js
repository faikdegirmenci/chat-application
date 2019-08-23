const express = require('express');
const router = express.Router();
//const passportGoogle = require('../auth/google');

router.get('/', function(req, res, next) { 
  res.render('chat', { user: req.user });
  });
module.exports = router;


