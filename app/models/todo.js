var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
    player: {
        numberPlayer: {
            type: Number,
            default: 0
        },
        type: String,
        default: ''
    }
});