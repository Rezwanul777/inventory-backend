const DataModel = require("../../models/Users/UsersModel");
const OTPSModel = require("../../models/Users/OTPSModel");
const UserCreateService = require("../../services/users/UserCreateService");
const UserLoginService = require("../../services/users/UserLoginService");
const UserupdateService = require("../../services/users/UserUpdateService");
const UserDetailService = require("../../services/users/UserDetailService");
const UserVerifyEmail = require("../../services/users/UserVerifyEmail");
const UserVerifyOTP = require("../../services/users/UserVerifyOTP");
const UserResetPassService = require("../../services/users/UserResetPassService");



exports.Registration=async(req,res)=>{
    let Result=await UserCreateService(req,DataModel)
    res.status(200).json(Result)
}

exports.Login=async(req,res)=>{
    let Result=await UserLoginService(req,DataModel)
    res.status(200).json(Result)
}

exports.ProfileUpdate=async(req,res)=>{
    let Result=await UserupdateService(req,DataModel)
    res.status(200).json(Result)
}

exports.ProfileDetail=async(req,res)=>{
    let Result=await UserDetailService(req,DataModel)
    res.status(200).json(Result)
}

exports.RecoverVerifyEmail=async(req,res)=>{
    let Result=await UserVerifyEmail(req,DataModel)
    res.status(200).json(Result)
}

exports.RecoverVerifyOTP=async(req,res)=>{
    let Result=await UserVerifyOTP(req,OTPSModel)
    res.status(200).json(Result)
}

exports.RecoverResetPass=async(req,res)=>{
    let Result=await UserResetPassService(req,DataModel)
    res.status(200).json(Result)
}