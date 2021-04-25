var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MusicSchema = new Schema({
    name: { type: String, unique: true},
    description: String,
});

module.exports = mongoose.model('Music', MusicSchema);