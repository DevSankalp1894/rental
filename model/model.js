     const mongoose = require("mongoose");

     const loginSchema = mongoose.Schema({
             flatname:String,
             password:String
     });

     const loginModel = mongoose.model("user" , loginSchema);

        module.exports=loginModel