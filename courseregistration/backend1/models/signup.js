import mongoose from "mongoose";
let Registeruser=new mongoose.Schema({
    username:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    cpassword:{
        type:String,
    }
})
export default mongoose.model("registerusers",Registeruser);