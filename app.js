const express = require("express")
const app = express()
const mongoose = require("mongoose")
const userRouter = require("./src/routes/userRouter")
const roleRouter = require("./src/routes/roleRouter")
const PORT = 3000;

//Databse connection 
mongoose.connect("mongodb://localhost:27017/'node_tut'")
.then(()=>{
    console.log("Connected to MongoDB")
})
.catch((err)=>{
    console.log("Error connecting to MongoDB",err);
})

app.use(express.json())
app.use(userRouter)
app.use(roleRouter)






app.listen(PORT , ()=>{
    console.log(`server is running on port http://localhost:${PORT}`);
})


