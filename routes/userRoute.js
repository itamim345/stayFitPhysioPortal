const express = require("express");
const router = express.Router();
const user = require('../Models/userModel'); //Importing Schema form Model
// const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { findOne } = require("../Models/userModel");


router.post('/register', async(req, res) => {
   try {
    //Getting data form req body
    const {name,email,password} = req.body;
    //If everything is ok then trying to create the user
    const newUser = new user({name,email,password});
    await newUser.save();
    res.status(200).send({
        message: "User Creation Successfull",
        success: true
    })
    
   } catch (error) {
        res.status(500).send({
            message: "Error Occured",
            success: false
        })
   }
})



router.post('/login', async(req,res) => {
    const {email,password} = req.body;
    try {
        const finduser = await user.findOne({email : email});
        if(!finduser){
            return res.status(200).send({
                message: "User Does Not Exist!",
                success: false
            })
        }
        //const matchpass = finduser.password === password;
        if (password == finduser.password) {
          const token = jwt.sign({ id: finduser._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
          });
            return res.status(200).send({
            message: "Login Successful",
            success: true,
            data: token,
          });
        } else {
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

module.exports = router;