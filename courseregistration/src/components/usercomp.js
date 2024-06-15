import { useState } from "react";
import axios from "axios";
function Usercomp(){
    const[userdata,setuserdata]=useState({
        'user':'',
        'password':''

        }
    )
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(userdata)
        axios.post('http://localhost:1234/adduser',{userdata}).then((res)=>console.log(res.data))
        alert("Data succesfully added")

    }
    return(
        <div>
            <form onSubmit={handlesubmit}>
                <label>User</label>
                <input type="text" name="user" onChange={(e)=>setuserdata({...userdata,user:e.target.value})}/>
                <br/>
                <label>Password</label>
                <input type="password" name="password" onChange={(e)=>setuserdata({...userdata,password:e.target.value})}/>
                <br/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )

    
}
export default Usercomp;