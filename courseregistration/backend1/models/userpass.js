import mongoose from "mongoose";
const Schema=mongoose.Schema;
let userpassSchema=new Schema({
    name:{
        type:String
    },
    rollno:{
        type:String
    },
    college:{
        type:String
    },
    email:{
        type:String
    },
    profile:{
        type:String
    }
    // profile:{
    //     type:String,
    //     required:true
    // }
});
export default mongoose.model("userpass",userpassSchema);