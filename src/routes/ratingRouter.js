const router = require("express").Router()
const {addRating , getAllRatingsByOwnerId , getAllRatings , deleteReview} = require("../controllers/ratingController")

router.post("/addrating" , addRating)

router.get("/getratingbyid/:id" , getAllRatingsByOwnerId)

router.get("/getallratings" , getAllRatings)

router.delete("/deleterating/:id" , deleteReview);

module.exports = router;