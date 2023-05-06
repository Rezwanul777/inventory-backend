const express=require('express');
// user controller for CRUD and reset password
const UserController= require('../controllers/Users/UserController');

// middleware for verify token and authorization
const AuthVerifyMiddleware = require('../middlewares/AuthVerifyMiddleware');

const router=express.Router()


// user Profile api

router.post('/Registration',UserController.Registration)
router.post('/Login',UserController.Login)
router.post('/ProfileUpdate',AuthVerifyMiddleware, UserController.ProfileUpdate)
router.get("/ProfileDetails", AuthVerifyMiddleware, UserController.ProfileDetail);
router.get("/RecoverVerifyEmail/:email", UserController.RecoverVerifyEmail);
router.get("/RecoverVerifyOTP/:email/:otp", UserController.RecoverVerifyOTP);
router.post("/RecoverResetPass", UserController.RecoverResetPass);




module.exports=router