const User = require("../models/User.model.js");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const passport = require("passport");

passport.serializeUser((userIsLoggedIn, cb) => {
  cb(null, userIsLoggedIn._id);
});

passport.deserializeUser((idOfUserFromSession, cb) => {
  User.findById(idOfUserFromSession, (error, userDocument) => {
    if (error) {
      cb(error);
      return;
    }
    cb(null, userDocument);
  });
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    (email, password, done) => {
      User.findOne({ email })
        .then((user) => {
          if (!user) {
            return done(null, false, { message: "Incorrect email" });
          }

          if (!bcrypt.compareSync(password, user.password)) {
            return done(null, false, { message: "Incorrect password" });
          }

          done(null, user);
        })
        .catch((err) => done(err));
    }
  )
);

module.exports = passport;
