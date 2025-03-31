const router = require("express").Router();
const {addCity  , getCity , getCityByStateId} = require("../controllers/cityController")

router.post("/addcity" ,addCity );

router.get("/" ,getCity);

router.get("/citybystateid/:id" , getCityByStateId);

module.exports = router;