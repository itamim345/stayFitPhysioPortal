const express = require('express');
const router = express.Router();
const therapist = require('../Models/therapistModel');
const authmiddleware = require("../Middlewares/authMiddleware");
const { request } = require('express');
const Appointment = require('../Models/appointmentModel')
const user = require("../Models/userModel")

//Post method to get therapist info
router.post("/get-therapist-info-by-user-id", authmiddleware, async (req, res) => {
  try {
    const findTherapist = await therapist.findOne({ userId: req.body.userId });
    return res.status(200).send({
        data: findTherapist,
        message: "therapist info fetched!", 
        success: true,
    })
  } catch (error) {
    return res.status(500).send({
      message: "Error to get therapist info",
      success: false,
    });
  }
});


router.post("/get-therapist-info-by-id", authmiddleware, async (req, res) => {
  try {
    let findSingleTherapist = await therapist.findOne({ _id: req.body.therapistId });
    return res.status(200).send({
      message: " single therapist info fetched!",
      success: true,
      data: findSingleTherapist
    });
  } catch (error) {
    return res.status(500).send({
      message: "Error to get therapist info",
      success: false,
    });
  }
});

//Post method to update therapist Profile
router.post("/update-therapist-profile", authmiddleware, async (req, res) => {
  try {
    const therapists = await therapist.findOneAndUpdate(
      { userId: req.body.userId },
      req.body
    );
    return res.status(200).send({
      success: true,
      data: therapists,
      message: "therapist Profile Updated!",
    });
  } catch (error) {
    return res.status(500).send({
      message: "Error to update therapist profile",
      success: false,
    });
  }
});

router.get("/get-appointments-by-therapist-id", authmiddleware, async (req, res) => {
  try {
    const findTherapist = await therapist.findOne({userId: req.body.userId})
    const appointments = await Appointment.find({ therapistId: findTherapist._id });
    return res.status(200).send({
      message: "appointments fetched Successfully!",
      success: true,
      data: appointments,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Error Occured in fetching appointments",
      success: false,
    });
  }
});

router.post("/change-appointment-status", authmiddleware, async (req, res) => {
  try {
    const { appointmentId, status } = req.body;
    const appointment = await Appointment.findByIdAndUpdate(appointmentId, {
      status,
    });

    const User = await user.findOne({ _id: appointment.userId });
    const unseenNotification = User.unseenNotification;
    unseenNotification.push({
      type: "Appoint-status-changed",
      message: `Your Appointment status has been ${status}!`,
      onClickPath: "/appointment",
    });

    await User.save();

    return res.status(200).send({
      message: "Appointment Status Updated!",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Error Occured in changing appontment status",
      success: false,
    });
  }
});



module.exports = router;