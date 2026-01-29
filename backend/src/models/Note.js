import mongoose from "mongoose"

//  create a schema
// model based on it

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },

}, {timestamp: true}
); // created at - updated at by default

const Note = mongoose.model("Note", noteschema)

export default Note 