const express = require('express');
const router = express.Router();
const therapist = require('../Models/therapistModel');
const authmiddleware = require("../Middlewares/authMiddleware");

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

module.exports = router;