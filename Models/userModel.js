const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    isTherapist: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    seenNotifications:{
        type: Array,
        default: []
    },
    unseenNotification: {
        type: Array,
        default: []
    }
}, {timestamps: true});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
