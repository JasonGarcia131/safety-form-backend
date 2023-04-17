const mongoose = require("mongoose");
const { Schema } = mongoose;

const inspectionSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    subContractor: {
        type: String,
        required: true
    },
    generalForeman: {
        type: String,
        required: true
    },
    memberName1: {
        type: String,
        required: true
    },
    memberId1: {
        type: String,
        required: true
    },
    memberName2: {
        type: String,
        required: true
    },
    memberId2: {
        type: String,
        required: true
    },
    truckId: {
        type: Number,
        required: true
    },
    chipperId: {
        type: Number,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    zone: {
        type: String,
        required: true
    },
    itemNumber: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    safetyQuestion1: {
        type: String,
        required: true
    },
    safetyQuestion2: {
        type: String,
        required: true
    },
    safetyQuestion3: {
        type: String,
        required: true
    },  
    safetyQuestion4: {
        type: String,
        required: true
    },
    safetyQuestion5: {
        type: String,
        required: true
    },
    safetyQuestion6: {
        type: String,
        required: true
    },
    safetyQuestion7: {
        type: String,
        required: true
    },
    safetyQuestion8: {
        type: String,
        required: true
    },
    safetyQuestion9: {
        type: String,
        required: true
    },
    safetyQuestion10: {
        type: String,
        required: true
    },
    safetyQuestion11: {
        type: String,
        required: true
    },
    safetyQuestion12: {
        type: String,
        required: true
    },
    safetyQuestion13: {
        type: String,
        required: true
    },
    safetyQuestion14: {
        type: String,
        required: true
    },
    safetyQuestion15: {
        type: String,
        required: true
    },
    safetyQuestion16: {
        type: String,
        required: true
    },
    employee1: {
        name: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        consent: {
            type: String,
            required: true
        }
    },
    employee2: {
        name: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        consent: {
            type: String,
            required: true
        }
    },
    employee3: {
        name: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        consent: {
            type: String,
            required: true
        }
    },
    manager: {
        type: String,
        required: true
    },
    timeIn: {
        type: String,
        required: true
    },
    timeOut: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: true
    },
    imageOne: {
        type: String,
        default: "No image"
    },
    imageTwo: {
        type: String,
        default: "No image"
    },
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