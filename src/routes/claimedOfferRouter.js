const router = require("express").Router()
const {addClaimeOffer} = require("../controllers/claimeOfferController")


router.post("/addclaimedoffer" , addClaimeOffer)

module.exports = router;