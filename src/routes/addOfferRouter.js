const router = require("express").Router()
const {addOffer , getAllOffers ,  getOfferByUserId } = require("../controllers/addOfferController")

router.post("/addoffer" , addOffer);

router.get("/alloffer", getAllOffers)
// router.post("/addofferwithfile" , addOfferWithImage);
router.get("/getoffers/:uid" , getOfferByUserId)

module.exports = router;