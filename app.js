const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const userRouter = require("./src/routes/userRouter")
const roleRouter = require("./src/routes/roleRouter")
const stateRouter = require("./src/routes/stateRouter")
const cityRouter = require("./src/routes/cityRouter")
const areaRouter = require("./src/routes/areaRouter")
const restRouter = require("./src/routes/restRouter")
const addOfferRouter = require("./src/routes/addOfferRouter")
const PORT = 3000;


//Databse connection 
mongoose.connect("mongodb://localhost:27017/'node_tut'")
.then(()=>{
    console.log("Connected to MongoDB")
})
.catch((err)=>{
    console.log("Error connecting to MongoDB",err);
})

app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(roleRouter)
app.use( "/state" ,stateRouter)
app.use( "/city" ,cityRouter)
app.use("/area" , areaRouter)
app.use(addOfferRouter);
app.use("/rest" , restRouter)

app.listen(PORT , ()=>{
    console.log(`server is running on port http://localhost:${PORT}`);
})



