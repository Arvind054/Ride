// Imports 
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectToDB = require('./DB/db');
//App Configuration
dotenv.config();
const app = express();
app.use(cors());

//Connect to the Mongoose DataBase
connectToDB();
//API Routes
app.get("/", (req, res)=>{
    res.send("On home Route");
});
//App Listening
app.listen(process.env.PORT, ()=>{
    console.log(`App is Listening on PORT ${process.env.PORT}`);
})