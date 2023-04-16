const mongoose = require("mongoose");
const { Schema } = mongoose;

const inspectionSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    inputOne: {
        type: String,
        required: true
    },
    images: [{
        type: String
    }],
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    refreshToken: String
});

module.exports = mongoose.model("Inspection", inspectionSchema);