const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const { session } = require('passport');

const register = (req, res) => {
    const { name, email, password } = req.body;

    // Check required fields
    if (!name || !email || !password) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }
    //Check password length
    if (password.length < 6) {
      return res.status(400).json({ msg: "Password should be atleast 6 characters long" });
    }

    User.findOne({ email: email }).then((user) => {
        if (user) return res.status(400).json({ msg: "User already exists" });
    
        //New User created
        const newUser = new User({
          name,
          email,
          password
        });
    
        //Password hashing
        bcrypt.genSalt(12, (err, salt) =>
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
    
            newUser.password = hash;
            // Save user
            newUser
              .save()
              .then(
                res.json({
                  msg: "Successfully Registered"
                })
              )
              .catch((err) => console.log(err));
          })
        );
    });
}

const login = (req, res) => {
    const { email, password } = req.body;
  
    // basic validation
    if (!email || !password) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }
    //check for existing user
    User.findOne({ email }).then((user) => {
      if (!user) return res.status(400).json({ msg: "User does not exist" });
  
      // Validate password
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });
  
        const sessUser = { id: user.id, name: user.name, email: user.email };
        req.session.user = sessUser; // Auto saves session data in mongo store
  
        res.json({ msg: " Logged In Successfully", sessUser }); // sends cookie with sessionID automatically in response
      });
    });
}

const register_login = (req, res, next) => {
  passport.authenticate("local", function(err, user, info) {
      if (err) {
          return res.status(400).json({ errors: err });
      }
      if (!user) {
          return res.status(400).json({ errors: "No user found" });
      }
      req.logIn(user, function(err) {
          if (err) {
              return res.status(400).json({ errors: err });
          }
          return res.status(200).json({user: {id: user.id}});
      });
  })(req, res, next);
};

const logoutUser = (req, res) => {
  req.session.destroy((err) => {
    // delete session data from store, using sessionID in cookie
    if (err) throw err;
    res.clearCookie("connect.sid"); // clears cookie containing expired sessionID
    res.send("Logged out successfully");
  });
}

module.exports = { register, login, register_login, logoutUser }