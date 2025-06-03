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
    offerTitle : {
        type : String
    },
    offerDesc :{
        type : String
    },
    offerStart : {
        type : String,
    },
    offerEnd : {
        type : String
    },
    offerImage : {
        type : String
    },
    foodType : {
        type : String
    }
},{timestamps : true})

module.exports = mongoose.model("claimedOffer", claimedOfferSchema);
