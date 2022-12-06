const mongoose = require("mongoose");
const therapistSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    consaltancyFees: {
        type: Number,
        required: true
    },
    timing: {
        type: Array,
        required: true
    },
    status: {
        type: String,
        default: "pending"
    }
},
{
    timestamps: true
}
)

const therapistModel = mongoose.model("therapist", therapistSchema);
module.exports = therapistModel;