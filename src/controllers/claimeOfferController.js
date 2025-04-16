const claimedOfferModel = require("../models/claimedOffer")

const addClaimeOffer = async (req,res) =>{
    const claimedOffer = await claimedOfferModel.create(req.body)
    res.status(201).json({
        message: "Offer claimed successfully",
        data: claimedOffer
    })
}

module.exports = {
    addClaimeOffer,
}
