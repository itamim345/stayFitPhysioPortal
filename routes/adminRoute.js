const express = require("express");
const router = express.Router();
const user = require('../Models/userModel');
const therapist = require("../Models/therapistModel");
const authmiddleware = require("../Middlewares/authMiddleware");

//Get Route for getting all therapists
router.get("/get-all-therapists", authmiddleware, async (req, res) => {
  try {
    const therapists = await therapist.find({})
    return res.status(200).send({
        message: "Therapists fetched Successfully!",
        success: true,
        data: therapists
    })
  } catch (error) {
    return res.status(500).send({
      message: "Error Occured in fetching Therapists",
      success: false,
    });
  }
});

//Get Route for getting all users
router.get("/get-all-users", authmiddleware, async (req, res) => {
  try {
    const Users = await user.find({})
    return res.status(200).send({
        message: "Users fetched Successfully!",
        success: true,
        data: Users
    })
  } catch (error) {
    return res.status(500).send({
      message: "Error Occured in fetching users",
      success: false,
    });
  }
});

// Post method to change doctor status
router.post("/change-therapist-status", authmiddleware, async (req, res) => {
  try {
    const { therapistId, status, userId } = req.body;
    const therapists = await therapist.findByIdAndUpdate(therapistId, {status} );

    const User = await user.findOne({ _id: therapists.userId });
    const unseenNotification = User.unseenNotification;
    unseenNotification.push({ 
      type: "New-therapist-request-changed",
      message: `Your Therapist accoutn has been ${status}!`,
      onClickPath: "/notfifications",
    });

    //Changing the isDoctor status
    User.isTherapist = status === "Approved" ? true : false; 
    await User.save();

    return res.status(200).send({
      message: "Your Therapist Status Updated!",
      success: true,
      data: therapists,
    })
  } catch (error) {
    console.log(error)
    return res.status(500).send({
      message: "Error Occured in fetching users",
      success: false,
    });
  }
});

module.exports = router;