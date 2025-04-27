const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const RiderController = require('../Controllers/RiderController');

// Rider Registration Route
router.post('/register', [
    body('fullname.firstname').isLength({min:1}).withMessage("First Name is Required."),
    body('email').isEmail().withMessage("Invalid Email Address"),
    body('password').isLength({min:1}).withMessage("password is Required"),
    body('status').isIn(["online", "offline"]).withMessage("Invalid Status"),
    body('vehicle.color').isLength({min:3}).withMessage("Invalid Color"),
    body('vehicle.number').isLength({min:5}).withMessage("Invalid Vehicle Number"),
    body('vehicle.capacity').isInt().withMessage("Invalid Cpapcity"),
    body('vehicle.type').isIn(["car", "bike", "bus"]).withMessage("Invlaid Vehicle"),
],
RiderController.registerRider
);
//Rider Login Route
router.post("/login", [
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min:1}).withMessage("Password is Required")
], RiderController.loginRider);

//Rider Profile Route
router.get("/profile", RiderController.getRiderProfile);

module.exports = router;