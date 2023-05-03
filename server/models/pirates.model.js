const mongoose = require('mongoose');

const PiratesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pirate name is required!" ],
        minlength: [3, "Pirate name must be at least 3 characters long!"]
    },
    image: {
        type: String,
        required: [true, "Pirate image is required!"]
    },
    treasure: {
        type: Number,
        required: [true, "Treasure # is required!"],
        min: [0, "Pirate treasure cannot be a negitive #!"]
    },
    phrase: {
        type: String,
        required: [true, "All pirates have a catch phrase! This is a known requirement."]
    },
    position: {
        type: String, 
        required: [true, "All pirates must have a position in the crew!"]
    },
    leg: {
        type: Boolean,
        required: [true, "Peg leg is a required input!"]
    },
    patch: {
        type: Boolean,
        required: [true, "Eye patch is a required field!"]
    },
    hook: {
        type: Boolean,
        required: [true, "Hook hand is required field!"]
    }
}, { timestamps: true });

const Pirates = mongoose.model("Pirates", PiratesSchema);

module.exports = Pirates;