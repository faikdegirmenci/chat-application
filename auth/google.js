const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

//models

const User = require('../models/users');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_LOGIN_CLIENT_ID,
    clientSecret: process.env.GOOGLE_LOGIN_SECRET_ID,
    callbackURL: process.env.GOOGLE_LOGIN_CALLBACK_URL
}, ((accessToken, refreshToken, profile, done) => {
    const data = profile._json;
    console.log(data);

    User.findOrCreate(
        {
            'googleId': data.sub
        },
        {
            name: data.given_name,
            surname: data.family_name,
            profilePhotoUrl: data.picture + '0'
        },(err,user)=>{
            return done(err,user);
        });
    })
));
passport.serializeUser((user,done) => {
    done(null,user); //user ı session a atamak için yaptık.
});

passport.deserializeUser((user,done) => {
    done(null,user); // uygulamanın herhangi birinde sessionu değiştirmek istediğimizde bu çalışır.
});
module.exports = passport;


