const express = require("express")
const {addUser , getUser , getUserId , deleteUser} = require("../controllers/userController")
const router = express.Router()

router.post("/adduser" , addUser);

router.get("/alluser" , getUser)

router.get("/userid/:id" , getUserId)

router.delete("/del/:id" , deleteUser)

module.exports = router