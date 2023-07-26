   const express = require("express");
   const app = express();
   const {connection} = require("./connection/connection")
   const loginModel = require("./model/model")
   app.use(express.json());
   const cors= require("cors");
   app.use(cors());

   app.post("/login" , async(req , res) => {
          
            const {flatname , password} = req.body;
           
            if(flatname == "123" && password=="456"){
        try{
                 const userData = new loginModel(req.body);
                 await userData.save(); 
                 res.send({msg:"User data successfully added"});
           }
           catch(err){
              console.log(err.message)
           }
            }else {
                 res.send({msg:"Invalid credential"})
            }
   })

   app.listen(4500 , async() => {
       try{
            await connection
            console.log("db is connected")
       }
       catch(err){
                console.log(err.message);
       }
       console.log("server is running on port 4500")
   })