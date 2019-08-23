const express = require('express');
const router = express.Router();
const passportGoogle = require('../auth/google');

router.get('/google', passportGoogle.authenticate(
    'google',
    {
        scope: ['profile']
    }
));

router.get('/google/callback', passportGoogle.authenticate(
    'google',
    {
        failureRedirect: '/' //hata olduğunda
    }),
    (req,res)=>{
      res.redirect('/chat');  //login işleminin başarılı olduğu zamanda
    });

module.exports = router;


