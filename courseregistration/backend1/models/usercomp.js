import mongoose from "mongoose";
const Schema=mongoose.Schema;
let userSchema=new Schema({
    user:{
        type:String
    },
    password:{
        type:String
    }
});
export default mongoose.model("users",userSchema);