const mongoose = require('mongoose')

const CarSchema = mongoose.Schema({
    name: {
        type: String,
        required : true,
    },
    car_make: {
        type: String,
        required : true,
    },
    car_model: {
        type: String,
        required : true,
    },
    chasis_number: {
        type: Number,
        required : true,
    },
    car_year: {
        type: Number,
        required : true,
    },
});

module.exports = mongoose.model("Cars", CarSchema)