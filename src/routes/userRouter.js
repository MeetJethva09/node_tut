const express = require("express")
const {addUser , getUser , getUserId ,forgotPass , deleteUser , userSignup , userLogin, getUserOnlyUser , resetPassword} =
 require("../controllers/userController")
const router = express.Router()

router.post("/adduser" , addUser);

router.post("/signup" , userSignup)

router.post("/login" , userLogin)

router.get("/alluser" , getUser)

router.get("/userid/:id" , getUserId)

router.delete("/del/:id" , deleteUser)

router.post("/forgotpass" , forgotPass)

router.get("/getuseronly/:rid" , getUserOnlyUser)

router.post("/resetpassword" , resetPassword);

module.exports = router