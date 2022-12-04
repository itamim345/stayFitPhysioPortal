const express = require("express");
const router = express.Router();
const user = require('../Models/userModel'); //Importing Schema form Model
// const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


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



router.post('.login', async(req,res) => {
    try {
        const finduser = await user.findOne({email : req.body.email});
        if(!finduser){
            res.status(200).send({
                message: "User Does Not Exist!",
                success: false
            })
        }
        const matchPass = finduser.password;
        if(!matchPass){
            res.status(200).send({
                message: "Incorrect Password!",
                success: false
            })
        }else {
            const token = jwt.sign({id: finduser._id}, process.env.JWT_SECRET, {
                expiresIn: "1d"
            })
            res.status(200).send({
                message: "Login Successful",
                success: true,
                data: token
            })
        }
    } catch (error) {
        res.status.send({
            message: "Error to login",
            success: false
        })
    }
})

module.exports = router;