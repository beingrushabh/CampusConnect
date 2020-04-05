const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClubComSchema = new Schema({
  Name: { type: String, required: true, trim:true, unique: true },
  Contact : { type: Number, required: true},
  Clg_ID: {type: Number, required:true },
}, {
  timestamps: true,
});

const ClubCom = mongoose.model('ClubCom', ClubComSchema);

module.exports = ClubCom;