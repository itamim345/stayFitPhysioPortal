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
        data: doctors
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
    const therapists = await user.find({})
    return res.status(200).send({
        message: "Users fetched Successfully!",
        success: true,
        data: doctors
    })
  } catch (error) {
    return res.status(500).send({
      message: "Error Occured in fetching users",
      success: false,
    });
  }
});

module.exports = router;