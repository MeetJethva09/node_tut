const {mongoose , Schema} = require("mongoose")

const restSchema = new Schema({
    name : {
        type : String ,
        required : true
    },
    category : {
        type : String,
        enum : ["Restaurant" , "Cafe" , "Food Truck"],
        required : true
    },
    desc : {
        type : String ,
        required : true
    },
    timing : {
        type : String ,
        required : true
    },
    address : {
        type : String ,
        required : true
    },
    status : {
        type : String ,
        default : "Active"
    },
    contact : {
        type : Number,
        required : true
    },
    city : {
        type : Schema.Types.ObjectId,
        ref : "city",
        required : true
    },
    area : {
        type : Schema.Types.ObjectId,
        ref : "area",
        required : true
    },
    foodtype : {
        type : String ,
        required : true
    },
    ownerId : {
        type : Schema.Types.ObjectId ,
        ref : "user"
    }
   

},{timestamps : true})

module.exports = mongoose.model('rest' , restSchema);