const mongoose2 = require("mongoose");

const folderSchema = mongoose2.Schema({
    title: String,
    category: String,
    content: String,
    image: String,
    created:{
        type:Date,
        default:Date.now,
    },
});


module.exports = mongoose2.model("Folder",folderSchema);
