// For DataBase Connection
const mongoose = require('mongoose')
async function connectToDB(){
    try{
        mongoose.connect(process.env.MONGODB_URL)
        .then(()=>{console.log("Connected to DB")})
        .catch((e)=>{console.log("Error Occured ", e)})
     }catch(e){
        console.log("errror: ", e);
     }
    }
// Export the ConnectToDB Function
module.exports = connectToDB;