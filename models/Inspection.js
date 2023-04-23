const mongoose = require("mongoose");
const { Schema } = mongoose;

const inspectionSchema = new Schema({
    submittedBy: {
        type: String,
        required: true
    },
    questions: [
    {   
        id: {
            type: Number,
            required: true
        },
        question: {
            type: String,
            required: true
        },
        response: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: false
        }
    }
],
employees: [
    {
        firstName: String,
        lastName: String,
        title: String,
        consent: String
    }
],
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