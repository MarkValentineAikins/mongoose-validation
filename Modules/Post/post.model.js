const {Schema, model} = require("mongoose");

const postSchema = new Schema ({
    title:{
        type: String,
        require:true,
    },

    body:{
        type: String,
        require: true,

    },

    publish:{
        type:Boolean,
        default:false,
    },

    author:{
        type:Schema.Types.ObjectId,
        required:true,
    },

    likedBy:[
        {
            type:Schema.Types.ObjectId,
            Ref: "User",
        },
    ],

   
},

{timestamps:true,}

);

module.exports = model("post", postSchema);