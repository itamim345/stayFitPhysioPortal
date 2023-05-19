const mongoose = require("mongoose");
const appoinmentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    therapistId: {
        type: String,
        required: true
    },
    therapistInfo: {
        type: Object,
        required: true
    },
    userInfo: {
        type: Object,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "pending"
    },
    payment: {
        type: Boolean,
        required: true,
        default: false
    },

}, {
    timestamps:true
});

const appoinmentModel = mongoose.model("appointment", appoinmentSchema);
module.exports = appoinmentModel;
