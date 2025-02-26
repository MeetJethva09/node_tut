const express = require("express")
const {getAllRoles , addRole , deleteRole , foundIdRole} = require("../controllers/roleController")
const router = express.Router()

router.get("/data" , getAllRoles);

router.post("/add" , addRole)

router.delete("/del/:id" , deleteRole)

router.get("/user/:id" , foundIdRole)

module.exports = router;