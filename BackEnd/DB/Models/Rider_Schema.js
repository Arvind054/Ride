const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Rider Schema
const RiderSchema = new mongoose.Schema({
    fullname:{
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
    socketId:{
        type:String,
    },
    status:{
        type:String,
        enum:["online", "offline"],
        default:"offline",
    },
    vehicle:{
       color:{
            type:String,
            required:true,
        },
        number:{
            type:String,
            required:true,
        },
        capacity:{
            type:Number,
            required:true,
            min:1,
        },
        type:{
            type:String,
            required:true,
            enum:["car", "bike", "bus"],
        },
    },
    location:{
        latitude:{
            type:Number,
        },
        longitude:{
            type:Number,
        },
    }
})

// Function to Generate the JWT Token
RiderSchema.methods.generateToken = function(){
    const token =jwt.sign({_id: this._id}, process.env.JWT_SECRET_KEY, {expiresIn: '14d'});
    return token;
}
// Function to get the Hashed Password
RiderSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
}
//function to compare the Password
RiderSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

const RiderModel = mongoose.model('Rider', RiderSchema);
module.exports = RiderModel;
