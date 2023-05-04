const jwt=require('jsonwebtoken')

const CreateToken= async (data) => {
    let Payload={exp: Math.floor(Date.now() / 1000) + (72*60*60), data:data}



    return await jwt.sign(Payload, 'SecretKey123456789');
}
module.exports=CreateToken