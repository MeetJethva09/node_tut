const {mongoose , Schema} = require("mongoose")

const userSchema = new Schema({
    firstName : {
        type : String
    },
    lastName : {
        type : String
    },
    email : {
        type : String
    },
    password:{
        type:String
    },
    gender : {
        type : String,
        enum : ["Male" , "Female"]
    },
    age : {
        type : Number
    },
    contact : {
        type : Number,
    },
    status : {
        type : Boolean,
        default : true
    },
    role : {
        type : Schema.Types.ObjectId,
        ref : "roles"
    }
},{timestamps : true})
module.exports = mongoose.model("user" , userSchema);