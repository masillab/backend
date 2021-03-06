// User data schema
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String, 
            required: true, 
            unique: true, 
            trim: true
        },
        password: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            trim: true
        },
        birthYear: {
            type: Number, 
            required: true
        },
        gender: {
            type: String, 
            required: true, 
            trim: true
        },
        stars: [
            {
                coffeeId: {type: String, unique: true}, 
                point: Number
            }
        ],
        likes: [
            {coffeeId: {type: String, unique: true}}
        ]
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model("user", userSchema);