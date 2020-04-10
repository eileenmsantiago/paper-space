const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EntriesSchema = new Schema({
    content: {
        type: String, 
        required: true 
    },
    mood: { 
        type: String, 
        required: true 
    },
    prompt: { 
        type: String
    },
    tone: {
        type: Array
    }
    // ,
    // date: {
    //     type: Date,
    //     default: Date.now,
    //     required: true 
    // }, 
}, {
    timestamps: true,
});

// API end-point routes
const Entries = mongoose.model("entries", EntriesSchema);
module.exports = Entries;
