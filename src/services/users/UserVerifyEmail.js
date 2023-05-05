const OTPSModel = require("../../models/users/OTPSModel")
const SendEmailUtility = require("../../utility/SendEmailUtility")

const UserVerifyEmail=async(Request,DataModel) => {
    try {
        // email account query
        let email=Request.params.email // Get Email from URL Parameter(req.params.email) 

        // 6 digit numbers for OTP
        let OTPCode=Math.floor(100000 + Math.random() * 900000)
        100000 + Math.random() * 900000

     // Database First process
    //check any user exist with this email
    let userCount=await DataModel.aggregate([{$match:{email: email}},{count:"total"}])
    if(userCount.length>0){
        // OTP Insert
        // Database Second process
        // after getting user count, if user exist then insert OTP in OTPSModel
        await OTPSModel.create({email:email,otp:OTPCode})
        
            // Email Send
            // send email to user with OTP
        let sendEmail=await SendEmailUtility(email,"Your Pin Code is: "+OTPCode,"Inventory PIN Verification")
        return { status: "success", data: sendEmail }
    }
        else{
            return { status: "fail", data: "No User Found" }
        }
    
    } catch (error) {
        return { status: "fail", data: error.toString() }
    }
}

module.exports = UserVerifyEmailService