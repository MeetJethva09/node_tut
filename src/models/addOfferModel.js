const {mongoose , Schema} = require("mongoose")
const addOfferSchema = new Schema({
    offerTitle : {
        type : String,
        required : true
    },
    offerImage : {
        type : String,
        required : true
    },
    offerDesc : {
        type : String,
        required : true
    },
    offerStatus : {
        type : String,
        required: true
    },
    restaurant : {
        type : Schema.Types.ObjectId,
        ref : 'rest',
    },
    offerStart : {
        type : Date,
        required : true
    },
    offerEnd : {
        type : Date,
        required : true
    },
    foodType : {
        type : String,
        required : true
    },
    userId : {
        type : Schema.Types.ObjectId,
        rel : "roles"
    }
} , {timestamps : true})

module.exports = mongoose.model("addoffer" , addOfferSchema);
