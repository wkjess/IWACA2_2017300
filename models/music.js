var mongoose = require('mongoose');

var musicSchema = new mongoose.Schema({
    name: String,
    description: String,
});

module.exports = mongoose.model('Music', musicSchema);