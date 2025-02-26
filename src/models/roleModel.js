const {mongoose , Schema,} = require("mongoose");
const roleSchema = new Schema({

    roleName : {
        type :String
    },
    roleDesc : {
        type : String
    }


})
module.exports = mongoose.model("roles" , roleSchema);