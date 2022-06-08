const mongoose = require("mongoose")

const Userschema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Gender:{
        type:String,
        required:true
    },
    Age:{
        type:Number,
        required:true
    },

    Date:{
        type:Date,
        default:Date.now
    }

})

const UsersModel = mongoose.model("user",Userschema)

module.exports = UsersModel