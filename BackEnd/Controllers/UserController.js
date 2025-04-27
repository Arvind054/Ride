// Import the User Model
const userModel = require('../DB/Models/User_Schema');
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken');
//User Register Controller
module.exports.registerUser = async function(req, res, next){
 const errors = validationResult(req);
 const {fullname, email, password } = req.body;
 if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
 }
 const hashedPassword =  await userModel.hashPassword(password);
 const user = await userModel.create({
    username:{
       firstname:fullname.firstname,
       lastname:fullname.lastname
      },
      email:email,
      password:hashedPassword
   });
   await user.save();
   const token = user.generateToken();
   res.status(201).json({token, user})
}

//User Login Controller
module.exports.loginUser = async function(req, res, next){
   const errors = validationResult(req);
   const {email, password} = req.body;
   if(!errors.isEmpty()){
      return res.status(401).json({errors:errors.array()});
   } 
   const user = await userModel.findOne({email:email}).select('+password');
   if(!user){
      return res.status(401).json({message:"Invalid Email or Password"});
   }
   const isMatch = await user.comparePassword(password);
   if(!isMatch){
      return res.status(401).json({message:"Invalid Email or Password"});
   }
   const token = user.generateToken(); 
   res.cookie('token', token);
   res.status(200).json({token, user});
}

//Get user Profile
module.exports.getUserProfile = async function(req, res, next){
   const token = req.headers.authorization.split(" ")[1] || req.cookies.token;
   if(!token){
      return res.status(401).json({message:"Unauthorized"});
   }
   try{
      const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
      const user = await userModel.findById(decoded._id).select('+password'); 
      res.status(200).json({user});
   }catch(err){
      res.status(401).json({message:"Unauthorized"});
   }
}
