const router = require("express").Router();
const {addArea , allArea ,getAreaByCityId} = require("../controllers/areaController")

router.post("/addarea" , addArea);

router.get("/" , allArea)

router.get("/areabycityid/:id" , getAreaByCityId);

module.exports = router;