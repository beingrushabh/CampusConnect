const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClubComSchema = new Schema({	
  UserName: { type: String, required: true, trim:true, unique: true },
  Password : { type: String, required : true },
  Email_ID : { type: String, required: true, lowercase: true, match: [/\S+@\S+\.\S+/, 'is invalid'] },
  Contact : { type: Number, required: true},
  Clg_ID: {type: Number, required:true },
}, {
  timestamps: true,
});

const ClubCom = mongoose.model('ClubCom', ClubComSchema);

module.exports = ClubCom;