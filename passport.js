const bcrypt = require("bcryptjs");
const User = require("./models/userModel");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy;

require('dotenv').config()

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

// Local Strategy
passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
        // Match User
        User.findOne({ email: email })
            .then(user => {
                // Create new User
                if (!user) {
                    const newUser = new User({ email, password });
                    // Hash password before saving in database
                    bcrypt.genSalt(12, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err;
                            newUser.password = hash;
                            newUser
                                .save()
                                .then(user => {
                                    return done(null, user);
                                })
                                .catch(err => {
                                    console.log(err);
                                    return done(null, false, { message: err });
                                });
                        });
                    });
                    // Return other user
                } else {
                    // Match password
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) throw err;

                        if (isMatch) {
                            return done(null, user);
                        } else {
                            return done(null, false, { message: "Wrong password" });
                        }
                    });
                }
            })
            .catch(err => {
                return done(null, false, { message: err });
            });
    })
);

//Twitter strategy
passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_API_KEY,
    consumerSecret: process.env.TWITTER_API_SECRET,
    callbackURL: `${process.env.BASE_URL}auth/twitter/callback`,
    userProfileURL: 'https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true',
    includeEmail: true,
  },
  async (token, tokenSecret, profile, cb) => {
    User.findOne({ email: profile.emails[0].value })
    .then(user => {
        // Create new User
        if (!user) {
            return cb(null, false, { message: "No user" });
        } else {
            return cb(null, user);
        }
    })
    .catch(err => {
        return cb(null, false, { message: err });
    });
  }
));

module.exports = passport;