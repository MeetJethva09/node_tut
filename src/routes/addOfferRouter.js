const router = require("express").Router()
const {addOffer , getAllOffers ,  getOfferByUserId , getOfferByOfferId , deleteOfferById , updateOfferById} = require("../controllers/addOfferController")

router.post("/addoffer" , addOffer);

router.get("/alloffer", getAllOffers)
// router.post("/addofferwithfile" , addOfferWithImage);
router.get("/getoffers/:uid" , getOfferByUserId)

router.get("/getofferbyofferid/:id" , getOfferByOfferId)

router.delete("/deleteofferbyid/:id" , deleteOfferById);

router.put("/updateofferbyid/:id" , updateOfferById)

module.exports = router;