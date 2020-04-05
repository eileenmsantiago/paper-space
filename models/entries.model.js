const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const entriesSchema = new Schema({
    entryContent: { type: String, required: true },
    mood: { type: String, required: true },
    prompt: { type: String, required: true },
    date:{type:Date, required:true}
}, {
    timestamps:true,
})

const Entries = mongoose.model("Entries",entriesSchema);
module.exports = Entries;
