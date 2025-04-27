// Imports 
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectToDB = require('./DB/db');
const cookieParser = require('cookie-parser')
const UserRoutes = require('./Routes/UserRoutes');
const RiderRoutes = require('./Routes/RiderRoutes');
//App Configuration
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

//Connect to the Mongoose DataBase
connectToDB();
//API Routes
app.get("/", (req, res)=>{
    res.send("On home Route");
});

//User Routes
app.use("/user", UserRoutes);

// Rider Routes
app.use("/rider", RiderRoutes);

//App Listening
app.listen(process.env.PORT || 3000, ()=>{
    console.log(`App is Listening on PORT ${process.env.PORT}`);
})