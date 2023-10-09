const mongoose = require('mongoose')

const CarSchema = mongoose.Schema({
    name: {
        type: String
    },
    car_make: {
        type: String
    },
    car_model: {
        type: String
    },
    chasis_number: {
        type: String
    },
    car_model: {
        type: String
    },

});

module.exports = mongoose.model("Users", UserSchema)