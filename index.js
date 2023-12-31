const express = require("express");
const app = express();
const { connection } = require("./connection/connection");
const {loginModel,TableModel} = require("./model/model");
app.use(express.json());
const cors = require("cors");
app.use(cors());

app.post("/login", async (req, res) => {
  const { flatname, password } = req.body;

  if (flatname == "123" && password == "456") {
    try {
      const userData = new loginModel(req.body);
      await userData.save();
      res.send({ msg: "User data successfully added" });
    } catch (err) {
      console.log(err.message);
    }
  } else {
    res.send({ msg: "Invalid credential" });
  }
});

app.post("/addtenant" , async(req , res) => {
           try{
               let tenantdata = new TableModel(req.body);
               await tenantdata.save();
               res.send({msg:"tenants data added successfully"})
           }

           catch(err){
                 res.send(err.message)
           }
})

app.get("/tenants" , async(req , res) => {
       try{
        const tenants = await TableModel.find();
          res.send(tenants);
       }
       catch(err){
            res.send(err.message)
       }
})

 app.delete("/tenants/delete/:tenantID" , async(req , res) => {
       const {tenantID} = req.params;
       
        try {
         let data = await TableModel.findByIdAndDelete({_id:tenantID});
          
                 res.send(data);
        }

       catch(err) {
            res.send({"msg" :err.message})
       }
  })

  app.put("/tenants/update/:tenantID" , async(req , res) => {
      const tenantID = req.params.tenantID;
      console.log(tenantID);
       try {
        let data = await TableModel.findByIdAndUpdate({_id:tenantID} , req.body);
         
          res.send({msg:"Data updated successfully"});
         
       }

      catch(err) {
           res.send({"msg" :err.message})
      }
 })


app.listen(4500, async () => {
  try {
    await connection;
    console.log("db is connected");
  } catch (err) {
    console.log(err.message);
  }
  console.log("server is running on port 4500");
});

 
