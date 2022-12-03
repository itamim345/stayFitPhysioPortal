const express = require("express");
const router = express.Router();
const user = require('../Models/userModel'); //Importing Schema form Model
// const bcrypt = require("bcryptjs");


router.post('/register', async(req, res) => {
   try {
    //Getting data form req body
    const {name,email,password} = req.body;
    //Checking if the user is already exists
    const userExist = await user.findOne({ email: email });
    if(userExist){
        res.status(200).send({
            message: 'User Already Exists!',
            success: false
        })
    }
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


router.get('/', (req,res) => {
    res.status(200).send({
        message: "Getting new data" 
    })
})

module.exports = router;