const express = require("express");
const router = express.Router();
const user = require('../Models/userModel'); //Importing Schema form Model
const therapist = require('../Models/therapistModel'); //Importing Schema form Model
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authmiddleware = require("../Middlewares/authMiddleware");
const Appointment = require('../Models/appointmentModel');
const moment = require("moment");
const dayjs = require("dayjs");



// Register Route
router.post('/register', async(req, res) => {
   try {
     const { name, email, pass } = req.body; //Getting data form req body
     const encryptedpass = await bcrypt.hash(pass, 10); //encrypting the password
     const oldUser = await user.findOne({email : email}) //finding if any old user in same email
     if(!oldUser){
        const newUser = new user({ name, email, pass:encryptedpass }); //if all ok, create user
        await newUser.save();
        return res.status(200).send({
          message: "User Creation Successfull",
          success: true,
        });
     }else {
        return res.status(200).send({
            message: "Email Already Exist!",
            success: false
        })
     }
     
   } catch (error) {
        return res.status(500).send({
            message: "Error Occured",
            success: false
        })
   }
})

//Login Route
router.post('/login', async(req,res) => {
    const {name, email, pass} = req.body;
    try {
        const finduser = await user.findOne({email : email});
        if(!finduser){
            return res.status(200).send({
                message: "User Does Not Exist!",
                success: false
            })
        }
        if ( await bcrypt.compare(pass, finduser.pass)) {
          const token = jwt.sign({ id: finduser._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
          });
            return res.status(200).send({
            message: "Login Successful",
            success: true,
            data: token,
          });
        }else {
            return res.status(200).send({
            message: "Incorrect Password!",
            success: false,
          });
        }
    } catch (error) {
            return res.status(500).send({
            message: "Error to login",
            success: false
        })
    }
})

//Get-user-info-by-id Route
router.post('/get-user-info-by-id', authmiddleware, async(req, res)=>{
  try {
    const findUser = await user.findOne({_id: req.body.userId})
    findUser.password = undefined; //converting password undefined as need to send whole data as response
    if (!findUser) {
      return res.status(200).send({
        message: "User Doesn't Exist",
        success: false,
      });
    } else {
      res.status(200).send({
        success: true,
        data: findUser //sending the whole founduser
      });
    }
    }catch (error) {
      return res.status(500).send({
        message: "Error to get user info",
        success: false
      })
  } 
})

//Apply Therapist Route
router.post("/apply-therapist-account", authmiddleware, async (req, res) => {
  try {
    const newTherapist = new therapist({ ...req.body, status: "pending" });
    await newTherapist.save();
    const adminUser = await user.findOne({ isAdmin: true });

    const unseenNotification = adminUser.unseenNotification;
    unseenNotification.push({
      type: "New-therapist-request",
      message: `${newTherapist.firstName} has Applied for a Therapist Account!`,
      data: {
        therapistId: newTherapist._id,
        name: newTherapist.firstName + " " + newTherapist.lastName,
      },
      onClickPath: "/admin/therapists", 
    });
    await user.findByIdAndUpdate(adminUser._id, { unseenNotification });
    return res.status(200).send({
      message: "Successfully Applied Therapist Account!",
      success: true,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Error Occured in applying-therapist account", 
      success: false,
    });
  }
});
//Mark All Notification Route
router.post("/mark-all-notifications-seen", authmiddleware, async (req, res) => {
  try{
    const User = await user.findOne({_id: req.body.userId})
    const unseenNotification = User.unseenNotification;
    const seenNotifications = User.seenNotifications;
    seenNotifications.push(...unseenNotification)
    User.unseenNotification = [];
    User.seenNotifications = seenNotifications;
    const updatedUser = await User.save()
    updatedUser.pass = undefined;
    return res.status(200).send({
      message: "All notifications marked as seen",
      success: true,
      data: updatedUser
    })
  } catch (error) {
    return res.status(500).send({
      message: "Error Occured in applying-therapist account", 
      success: false,
    });
  }
});
// Delete All Notification Route
router.post("/delete-all-notifications", authmiddleware, async (req, res) => {
  try{
    const User = await user.findOne({_id: req.body.userId})
    User.seenNotifications = [];
    User.unseenNotification = [];
    const updatedUser = await User.save();
    updatedUser.pass = undefined;
    return res.status(200).send({
      message: "All notifications has deleted",
      success: true,
      data: updatedUser
    })
  } catch (error) {
    return res.status(500).send({
      message: "Error Occured in deleted notification", 
      success: false,
    });
  }
});


//Get Route for getting all therapists
router.get("/get-all-approved-therapists", authmiddleware, async (req, res) => {
  try {
    const therapists = await therapist.find({status: "Approved"});
    return res.status(200).send({
      message: "Therapists fetched Successfully!",
      success: true,
      data: therapists,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Error Occured in fetching Therapists",
      success: false,
    });
  }
});

// Post route to book appointment
router.post("/book-appointment", authmiddleware, async (req, res) => {
  try {
    req.body.status = "pending";
    req.body.date = moment(req.body.date, "DD-MM-YYYY").toISOString();
    req.body.time = moment(req.body.time, "hh:mm").toISOString();
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    //Finding therapist based on his user ID
    const User = await user.findOne({ _id: req.body.therapistInfo.userId });
    User.unseenNotification.push({
      type: "new-appointment-request",
      message: `An appointment request from ${req.body.userInfo.name}`,
      onClickPath: "/therapist/appointments",
    });
    await User.save();
    return res.status(200).send({
      success: true,
      message: "appointment Booked!",
    });
  } catch (error) {
    return res.status(500).send({
      message: "Error to book appointment",
      success: false,
    });
  }
});


router.post("/check-booking-availability", authmiddleware, async (req, res) => {
  try {
    const date = moment(req.body.date, 'DD-MM-YYYY').toISOString();
    const fromTime = moment(req.body.time, "hh:mm").subtract(1, 'hours').toISOString();
    const toTime = moment(req.body.time, "hh:mm").add(1, 'hours').toISOString();
    const therapistId = req.body.therapistId;
    
    const appointments = await Appointment.find({
      therapistId,
      date,
      time: {$gte: fromTime, $lte: toTime},
    })

    if(appointments.length > 0){
      return res.status(200).send({
        success: false,
        message: "Appointment Not Available!",
      })
    }else {
      return res.status(200).send({
        success: true,
        message: "appointment Available",
        data: toTime
      });
    }

    
  } catch (error) {
    return res.status(500).send({
      message: "Error to book appointment",
      success: false,
    });
  }
});

module.exports = router;