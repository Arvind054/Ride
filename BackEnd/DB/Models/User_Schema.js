const mongoose = require("mongoose")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
// User Schema

const User_Schema = new mongoose.Schema({
    username:{
        firstname:{
            type: String,
            required: true,
        },
        lastname:{
            type: String,
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        select : false,
    },
    socketID:{
        type:String,
    }
});

//Function to Generate the JWT Token
User_Schema.methods.generateToken = function(){
    const token =jwt.sign({_id: this._id}, process.env.JWT_SECRET_KEY, {expiresIn: '14d'});
    return token;
};

//Function to compare the Password
User_Schema.methods.comparePassword = async function(password){
   return await bcrypt.compare(password, this.password);
}

//Function to get the Hashed Password
User_Schema.statics.hashPassword = async function(password){
     return await bcrypt.hash(password,10);
}

const userModel = mongoose.model('RideUser', User_Schema);

module.exports = userModel;