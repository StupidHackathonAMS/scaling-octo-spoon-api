var mongoose = require('mongoose');

var wordSchema = mongoose.Schema({
    in: { type: String, required: true, unique: true },
    out: { type: String, required: true }
}, {
    versionKey: false
});

module.exports = mongoose.model('Word', wordSchema);