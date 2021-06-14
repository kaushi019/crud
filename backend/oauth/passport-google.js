var passport = require('passport')
var GoogleStrategy = require('passport-google-oauth20').Strategy;

var config = require('../config/config.js')
var userData = require('../DB/userSchema.js')


passport.serializeUser( (user, done)=>{
    done(null, user.id);
});


passport.deserializeUser( (id, done)=>{
    userData.findById(id, (err, user)=>{
        if(err)done(null,err)
        else done(null,user)
    });
});


module.exports = (passport)=>{
    passport.use(new GoogleStrategy({
        clientID : config.oAuthClientID,
        clientSecret : config.oAuthClientSecret,
        callbackURL : "http://localhost:3000/google/callback"
      },
      (accessToken, refreshToken, profile, done)=>{
          console.log(profile.emails[0].value);
          userData.findOne({email : profile.emails[0].value},(err,result)=>{
            if(result){
                return done(null,result);
            }
            else{
                var data = new userData({
                    name : "google",
                    email : profile.emails[0].value,
                    username : profile.displayName,
                    password : "google",
                    googleId : profile.id
                });
                // console.log(data)
                data.save((err,data)=>{
                    console.log(err)
                    return done(null,data);
                });
            }
          })
        }
    ));
}
