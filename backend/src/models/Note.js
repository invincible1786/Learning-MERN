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

}, {timestamps: true}
); // created at - updated at by default

const Note = mongoose.model("Note", noteSchema)

export default Note 