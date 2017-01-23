var mongoose = require('mongoose');

module.exports = mongoose.model('TodoRound', {
    numberPlayer: Number,
    namePlayer: String,
    limitMovements: Number,
    moveType: String,
    numberRound: Number
});