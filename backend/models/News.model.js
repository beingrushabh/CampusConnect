const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NewsSchema = new Schema({
  Title: { type: String, required: true },
  Date_time: { type: Date, required: true },
  Description: { type: String, required: true },
}, {
  timestamps: true,
});

const News = mongoose.model('News', NewsSchema);

module.exports = News;