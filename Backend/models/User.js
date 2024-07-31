const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { 
    type: String, 
    required: true, 
    unique: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  // firstName: { 
  //   type: String 
  // },
  // lastName: { 
  //   type: String 
  // },
  // profilePicture: { 
  //   type: String 
  // },
  // dateOfBirth: { 
  //   type: Date 
  // },
  // gender: { 
  //   type: String 
  // },
  // location: { 
  //   type: String 
  // },
  // bio: { 
  //   type: String 
  // },
});


module.exports = mongoose.model('User', UserSchema);
