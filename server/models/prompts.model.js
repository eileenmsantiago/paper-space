const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PromptsSchema = new Schema({
    prompt: {type: String, require: true}
});

const Prompts = mongoose.model("prompts", PromptsSchema);
module.exports = Prompts;