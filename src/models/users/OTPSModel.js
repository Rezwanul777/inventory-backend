const  mongoose=require('mongoose');

const OTPschema=mongoose.Schema({
    email:{type:String},
    otp:{type:String},
    status:{type:Number,default:0},
    createdDate:{type:Date,default:Date.now()}
},{versionKey:false})

const OTPSModel=mongoose.model('otp',OTPschema)
module.exports = OTPSModel;