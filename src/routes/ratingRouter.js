const router = require("express").Router()
const {addRating , getAllRatingsByOwnerId , getAllRatings} = require("../controllers/ratingController")

router.post("/addrating" , addRating)

router.get("/getratingbyid/:id" , getAllRatingsByOwnerId)

router.get("/getallratings" , getAllRatings)

module.exports = router;