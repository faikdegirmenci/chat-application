const express = require('express');
const router = express.Router();
//const passportGoogle = require('../auth/google');

router.get('/', function(req, res, next) {
  console.log(req.user);  
  res.render('chat', { user: req.user });
  });
module.exports = router;


