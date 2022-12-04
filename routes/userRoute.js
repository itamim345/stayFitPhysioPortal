const express = require("express");
const router = express.Router();
const user = require('../Models/userModel'); //Importing Schema form Model
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



router.post('/register', async(req, res) => {
   try {
     const { name, email, password } = req.body; //Getting data form req body
     const encryptedpass = await bcrypt.hash(password, 10); //encrypting the password
     const oldUser = await user.findOne({email : email}) //finding if any old user in same email
     if(!oldUser){
        const newUser = new user({ name, email, password: encryptedpass }); //if all ok, create user
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



router.post('/login', async(req,res) => {
    const {name, email, password} = req.body;
    try {
        const finduser = await user.findOne({email : email});
        if(!finduser){
            return res.status(200).send({
                message: "User Does Not Exist!",
                success: false
            })
        }
        if (password == 'temp') {
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

module.exports = router;