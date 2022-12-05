const express = require("express");
const router = express.Router();
const user = require('../Models/userModel'); //Importing Schema form Model
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authmiddleware = require("../Middlewares/authMiddleware")


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

router.post('/get-user-info-by-id', authmiddleware, async(req, res)=>{
  try {
    const findUser = await user.findOne({_id: req.body.userId})
    if (!findUser) {
      return res.status(200).send({
        message: "User Doesn't Exist",
        success: false,
      });
    } else {
      res.status(200).send({
        success: true,
        data: {
          name: findUser.name,
          email: findUser.email
        }
      });
    }
    }catch (error) {
      return res.status(500).send({
        message: "Error to get user info",
        success: false
      })
  } 
})

module.exports = router;