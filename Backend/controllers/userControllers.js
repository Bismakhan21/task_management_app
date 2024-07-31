const  User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.signupUser = async (req, res, next) => {

  console.log('request coming....!')
  try {
    const { username, email, password } = req.body;

    const salt = bcrypt.genSaltSync(10);
    const password_hash = bcrypt.hashSync(body.password, salt);

    const new_user = new User.create({
      username,
      email,
      password: password_hash,
    });

   
    await new_user.save();

    res.status(201).json({success: true, data: new_user , message: 'User created successfully' });

  } catch (error) {
    return next("Internal server error!" )
  }
};

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return next({status:402, message: 'Invalid credentials' });
    }

    const payload = {
      user_id: find_user._id,
    };

    const jwt_token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    find_user.$inc('login_count', 1)

    await find_user.save();

    return res.json({ success: true, message: "Loggedin Successfully!", access_token:jwt_token });
  } catch (error) {
    return next({status:402, message: 'Server error' });
  }
};

exports.check_auth_controller = async (req, res) => {
  try { 
    const user = req.user;
    return res.json({ success: true, data: user });
  } catch (error) {
    
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateUser = async (req, res) => {
  const { username, email, firstName, lastName, profilePicture, dateOfBirth, gender, location, bio } = req.body;

  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.username = username || user.username;
    user.email = email || user.email;
    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.profilePicture = profilePicture || user.profilePicture;
    user.dateOfBirth = dateOfBirth || user.dateOfBirth;
    user.gender = gender || user.gender;
    user.location = location || user.location;
    user.bio = bio || user.bio;

    await user.save();

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await user.remove();

    res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
