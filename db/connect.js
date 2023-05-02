const mongoose = require('mongoose');

const connectDB=async()=>{
  //console.log(process.env.MONGO_URL);
   try {
      const dbconnection=await mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true,  useUnifiedTopology: true });
       console.log(`Connected to mongodb database ${dbconnection.connection.host}`);
   } catch (error) {
      console.log(`mongodb connection in ${error}`);
   }
}

module.exports=connectDB;