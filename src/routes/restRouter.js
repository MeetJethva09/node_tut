const {addRest, getRestById , getAllRest , deleteRestById} = require("../controllers/addRest")
const router = require("express").Router()

router.post("/addrest" , addRest)

router.get("/getrestbyid/:id" , getRestById);

router.get("/getallrest" , getAllRest);

router.delete("/deleterestbyid/:id" , deleteRestById);

module.exports = router;