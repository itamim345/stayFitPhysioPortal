const express = require('express');
const router = express.Router();
const therapist = require('../Models/therapistModel');
const authmiddleware = require("../Middlewares/authMiddleware");
const { request } = require('express');

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

//Post method to update therapist Profile
router.post("/update-profile", authmiddleware, async (req, res) => {
  try {
    const therapists = await therapist.findOneAndUpdate(
      {userId: request.body.userId},
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



module.exports = router;