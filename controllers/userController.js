const User = require('../models/userModel');
const bcrypt = require("bcryptjs");

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

module.exports = { register }