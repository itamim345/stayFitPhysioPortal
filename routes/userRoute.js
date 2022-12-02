// const express = require("express");
// const router = express.Router();
// const user = require('../Models/userModel'); //Importing Schema form Model
// const bcrypt = require("bcryptjs");


// router.post('/register', async(req,res) => {
//     try {
//         const userExist = await user.findOne({email: req.body.email})
//         if(userExist){
//             return res.status(200).send({
//                 message: "User Exists..",
//                 success: false
//             })
//         }
//         const password = req.body.password;
//         const salt = await bcrypt.genSalt(10); //Salted from bcrypt
//         const hashedPassword = await bcrypt.hash(password,salt); //Hashed the password

//         req.body.password = hashedPassword; //Converted the password to hashed format & inserted to DB

//         const newUser = new user(req.body);

//         await newUser.save();
//         res.status(200).send({
//           message: "Successfull User Creation ",
//           success: true
//         });


//     } catch (error) {
//         res.status(500).send({
//             message: "Error Occured!",
//             success: false, 
//             error
//         })
//     }
// })

// router.post('/login', async (req,res) => {
//     try {
        
//     } catch (error) {
        
//     }
// })

// module.exports = router;