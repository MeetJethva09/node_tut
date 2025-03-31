const { mongoose ,Schema } = require("mongoose")
const stateSchema = new Schema({
    stateName : {
        type : String,
        required : true,
        unique : true
    },

},{timestamps : true})
module.exports = mongoose.model("state" , stateSchema);