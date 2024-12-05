const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const usersSchema = new Schema (
    
    {
        name: {type: String, require: true},
        lastname: {type: String, require: true},
        username: {type: String, require: true, unique: true},
        email: {
            type: String,
            required: true,
            unique: true,
            match: [emailRegex, 'Por favor ingresa un correo electrónico válido'],
        },
        password: {type: String, requiere: true}, 
        role: {type: String, enum: ["organizador", "admin"], default: "organizador"},
    },

    {
        collection:"users", 
        timestamps: true,
    }
);

const Users = mongoose.model("users", usersSchema);
module.exports = Users;

