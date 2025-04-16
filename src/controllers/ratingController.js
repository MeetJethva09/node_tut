const ratingModel = require("../models/ratingOffer")

const addRating = async (req,res) =>{
    try{
            const ratingAdded = await ratingModel.create(req.body)
            res.status(201).json({
                message: "Rating Added Successfully",
                data : ratingAdded
            })
    }catch(err)
    {
            res.status(500).json({
                message: "Internal Server Error",
                data : err
            })
    }
}

const getAllRatingsByOwnerId = async (req,res) =>{
    try{
        const getRatings = await ratingModel.find({userId : req.params.id});
        res.status(200).json({
            message: "Ratings Retrieved Successfully",
            data : getRatings
        })
    }catch(err)
    {
        res.status(404).json({
            message: "No Ratings Found",
            data : err
        })
    }
}

const getAllRatings = async (req,res) =>{
    const getAllRating = await ratingModel.find().populate("offerId userId")
    res.status(200).json({
        message: "Ratings Retrieved Successfully",
        data : getAllRating
    })
}

module.exports = {
    addRating,
    getAllRatingsByOwnerId,
    getAllRatings,
}