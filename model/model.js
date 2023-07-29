     const mongoose = require("mongoose");

     const loginSchema = mongoose.Schema({
             flatname:String,
             password:String
     });

     const tableSchema = mongoose.Schema({
           Tenantname:String,
           Amountpaid:Number,
           Paymentmethod:String,
           Paymentconfirmation:String,
           Receiptno:String,
           Date:String,
           email:String,
           Address:String
     })

     const loginModel = mongoose.model("user" , loginSchema);
     const TableModel = mongoose.model("table" , tableSchema)

        module.exports={loginModel,TableModel}


      