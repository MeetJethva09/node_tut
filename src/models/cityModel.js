const { mongoose , Schema } = require("mongoose")

const citySchema = new Schema({
    cityName : {
        type : String,
        required : true,
        unique : true
    },

    stateId : {
        type : Schema.Types.ObjectId,
        rel : "state"
    }
    
} , {timestamps : true})

module.exports = mongoose.model("city" , citySchema);