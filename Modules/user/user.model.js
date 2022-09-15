const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    firtName:{
        type:String,
        require: true,

    },

    lastName: {
        type: String,
    
        require: true,

    },

    email:{
        type:String,
        require: true,
        unique: true,
        lowercase: true,
    },

    password:{
        type:String,
        require:true,
        unique:true,
        minlength: [6, "Password too short"]
    },

   
    
})

module.exports = model("user", userSchema);
