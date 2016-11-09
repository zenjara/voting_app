var mongoose= require("mongoose");

var pollSchema = new mongoose.Schema({
    name: String,
    author:{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        name: String
    },
    options: [String]
});

module.exports=mongoose.model("Poll",pollSchema);