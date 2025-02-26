const {mongoose , Schema} = require("mongoose")

const userSchema = new Schema({
    firstName : {
        type : String
    },
    lastName : {
        type : String
    },
    age : {
        type : Number
    },
    status : {
        type : Boolean
    },
})
module.exports = mongoose.model("user" , userSchema);