const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose')

const UserSchema = new Schema({
  username: { type: String, required: true, trim:true, unique: true },
  password : { type: String, required : true },
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

UserSchema.plugin(passportLocalMongoose)

const User = mongoose.model('User', UserSchema);

module.exports = User;