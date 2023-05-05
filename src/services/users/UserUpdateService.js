const updateService=async(Request,DataModel)=>{
    try {
        //email has been paased in headers
     let data=await DataModel.updateOne({email: Request.headers['email']}, Request.body)
     return {status: "success", data: data}   
    } catch (error) {
        return {status: "fail", data: error.toString()}
    }
}

module.exports=updateService