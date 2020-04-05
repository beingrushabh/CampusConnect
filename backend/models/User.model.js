const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  UserName: { type: String, required: true, trim:true },
  Password : { type: String, required : true },
  Email_ID : { type: String, required: true, lowercase: true, match: [/\S+@\S+\.\S+/, 'is invalid'] },
  FirstName: { type: String, required: true },
  LastName : { type: String, required: true},
  Gender: { type: String, required: false },
  Age: { type: Number, required: true },
  Address: {type: String, required: true},
  Clg_ID: {type: Number, required:true },
}, {
  timestamps: true,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;