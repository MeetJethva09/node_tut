const {mongoose , Schema} = require("mongoose")

const claimedOfferSchema = new Schema({
    userId : {
        type : Schema.Types.ObjectId,
        ref : "user"
    },
    offerId : {
        type : Schema.Types.ObjectId,
        ref : "addoffer"
    },
    offerName : {
        type : String
    },
    offerDesc :{
        type : String
    },
    offerValid : {
        type : String
    },
    offerImage : {
        type : String
    },
    foodtype : {
        type : String
    }
},{timestamps : true})

module.exports = mongoose.model("claimedOffer", claimedOfferSchema);