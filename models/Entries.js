const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EntriesSchema = new Schema({
    entryContent: {
        type: String, 
        required: true 
    },
    mood: { 
        type: String, 
        required: true 
    },
    prompt: { 
        type: String, 
        required: true 
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// const EntriesSchema = new Schema({
//     entryContent: {
//         type: String, 
//         required: true 
//     },
//     mood: { 
//         type: String, 
//         required: true 
//     },
//     prompt: { 
//         type: String, 
//         required: true 
//     },
//     date: { 
//         type: Date, 
//         default: Date.now
//     }
// }, {
//     timestamps:true,
// })

const Entries = mongoose.model("Entries",EntriesSchema);
module.exports = Entries;
