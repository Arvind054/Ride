const express = require('express');
const { validationResult } = require('express-validator');
const RiderModel = require('../DB/Models/Rider_Schema');
const jwt = require('jsonwebtoken')

//Route For Rider Registration
module.exports.registerRider = async function(req, res, next){
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
  }
  const {fullname, email, password, status, vehicle, location} = req.body;
  try{
    if(!fullname || !email || !password || !status || !vehicle){
        return res.status(401).json({message:"All fields are required"})
    }
    const isRiderExists = await RiderModel.findOne({email:email});
    if(isRiderExists){
        return res.status(401).json({message:"Rider Already Exists"});
    }
     const hashedPassword = await RiderModel.hashPassword(password);
     const newRider = await RiderModel.create({
        fullname:{
            firstname: fullname.firstname,
            lastname:fullname.lastname
        },
        email:email,
        password:hashedPassword,
        status: status,
        vehicle:{
            color:vehicle.color,
            number:vehicle.number,
            capacity: vehicle.capacity,
            type: vehicle.type
        },
        location:location,
     });
     await newRider.save();
     const token = newRider.generateToken();
     res.status(201).json({token, newRider});
  }catch(err){
    return res.status(401).json({message:err.message});
  }
}

// Route For Rider Login
module.exports.loginRider = async function(req, res, next){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(401).json({errors:errors.array()});
    }
    try{
       const {email, password} = req.body;
       if(!email || !password){
        return res.status(401).json({message:"Emain & Passowrd are Required."});
       }
       const rider = await RiderModel.findOne({email:email}).select('+password');
       if(!rider){
        return res.status(401).json({message:"Invalid Email or Password."});
       }
       const isMatch = rider.comparePassword(password);
       if(!isMatch){
           return res.status(401).json({message:"Invalid Email or Password."});
       }
       const token = rider.generateToken();
       res.cookie('token', token);
       res.status(200).json({token, rider});
    }catch(err){
        res.status(401).json({message: err.message});
    }
}

//Route For getting Rider Profile
module.exports.getRiderProfile = async function(req, res, next){
    const token = req.headers.authorization.split(" ")[1] || req.cookies.token;
    if(!token){
        return res.status(401).json({message:"Unauthorized"});
    }
    try{
      const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
      const rider = await RiderModel.findById(decoded._id).select('+password');
      return res.status(200).json({rider})
    }catch(err){
        return res.status(401).json({message:err.message});
    }
}