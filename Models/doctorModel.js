const mongoose = require("mongoose");
const doctorSchema = new mongoose.Schema({
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
    email: {
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
    startTiming: {
        type: String,
        required: true
    },
    endTiming: {
        type: String,
        required: true
    }
},
{
    timestamps: true
}
)

const doctorModel = mongoose.model("doctors", doctorSchema);
module.exports = doctorModel;