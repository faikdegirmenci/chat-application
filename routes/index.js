var express = require('express');
var router = express.Router();

/* GET home page. */
// burada eğer kullanıcı girişi olmadı ise ana sayfaya döndürüyor. Eğer kayıt varsa chat bölümüne gönderiyor.
router.get('/', (req, res, next)=> {
  if(!req.user){
    res.render('index', { title: 'Express' });
  } else{
    res.redirect('/chat');
  }
});

module.exports = router;
