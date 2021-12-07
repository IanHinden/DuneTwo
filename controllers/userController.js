const userModel = require('../models/userModel');

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
}

module.exports = { register }