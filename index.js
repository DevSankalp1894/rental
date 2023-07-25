   const express = require("express");
   const app = express();
   const {connection} = require("./connection/connection")
   const loginModel = require("./model/model")
   app.use(express.json());
   const cors= require("cors");
   app.use(cors());

   app.post("/login" , async(req , res) => {
            console.log(req.body);
        try{
                 const userData = new loginModel(req.body);
                 await userData.save(); 
                 res.send("User data successfully added");
           }
           catch(err){
              console.log(err.message)
           }
   })


   app.listen(3000 , async() => {
       try{
            await connection
            console.log("db is connected")
       }
       catch(err){
                console.log(err.message);
       }
       console.log("server is running on port 3000")
   })