const {mongoose  ,Schema} = require("mongoose")
const areaSchema = new Schema({
    areaName : {
        type : String,
        required : true,
    },
    stateId : {
        type : Schema.Types.ObjectId,
        rel : "state"
    },
    cityId : {
        type : Schema.Types.ObjectId,
        rel : "city"
    }
},{timestamps : true})

module.exports = mongoose.model("area" , areaSchema);