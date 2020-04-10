const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const UsersSchema = new Schema ({
    username: {
        type: String,
        required: true, 
        unique: true, 
    },
    email: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true,
        minlength: 6
    }
})

const Users = mongoose.model("users", UsersSchema);
module.exports = Users;