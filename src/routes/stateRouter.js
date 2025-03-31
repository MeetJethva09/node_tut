const router = require("express").Router();
const {addState , allState} = require("../controllers/stateController");

router.post("/addstate" , addState );

router.get("/" , allState);

module.exports = router;