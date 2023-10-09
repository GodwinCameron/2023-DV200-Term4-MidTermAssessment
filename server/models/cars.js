const mongoose = require('mongoose')

const CarSchema = mongoose.Schema({
    name: {
        type: String
    },
    password: {
        type: String
    },
    type: {
        type: String
    },

});

module.exports = mongoose.model("Users", UserSchema)