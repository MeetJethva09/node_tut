const {Schema , mongoose} = require("mongoose")

const ratingSchema = new Schema({
    offerId : {
        type : Schema.Types.ObjectId ,
        ref : 'addoffer'
    },
    userId : {
        type : Schema.Types.ObjectId ,
        ref : 'user'
    },
    comments : {
        type : String ,
    },
    rating : {
        type : Number ,
    }
},{timestamps : true})

module.exports = mongoose.model("rarings" , ratingSchema)
