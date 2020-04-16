const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EntriesSchema = new Schema({
    content: {
        type: String, 
        required: true 
    },
    _userId: {
        type: String,
        required: true
    },
    prompt: { 
        type: String
    },
    tones: {
        type: Array
    }
}, {
    timestamps: true,
});

// API end-point routes
const Entries = mongoose.model("entries", EntriesSchema);
module.exports = Entries;
