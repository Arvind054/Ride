const express = require('express')
const router = express.Router();
const {body} = require('express-validator');
const UserController = require('../Controllers/UserController')
// Post Route For Register
router.post("/register", [
    body('email').isEmail().withMessage("Invalid Email Address"),
    body('username.firstname').isLength().withMessage("Firstname is Required."),
    body('password').isLength().withMessage('Password is Required !!')],
    UserController.registerUser
)
// Post Route For Login
router.post("/login", [
    body('email').isEmail().withMessage("Invalid Email Address"),
    body('password').isLength().withMessage('Password is Required !!')],
    UserController.loginUser
)
module.exports = router;