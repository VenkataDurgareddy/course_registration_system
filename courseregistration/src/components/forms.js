import { useState } from "react";
import axios from "axios";
function Forms()
{
    const[formdata,setFormdata]=useState({
        'name':'',
        'rollno':'',
        'college':'',
        'branch':''
    })
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(formdata)
        axios.post('http://localhost:1234/addstud',{formdata}).then((res)=>console.log(res.data))
        alert("success")
    }
    return(
        <div>
            
        <form onSubmit={handlesubmit}>
            <label>name</label>
            <input type="text" name="name" onChange={(e)=>setFormdata({...formdata,name:e.target.value})}/>
            <br/>
            <label>rollno</label>
            <input type="text" name="rollno" onChange={(e)=>setFormdata({...formdata,rollno:e.target.value})}/>
            <br/>
            <label>college</label>
            <input type="text" name="college" onChange={(e)=>setFormdata({...formdata,college:e.target.value})}/>
            <br/>
            <label>branch</label>
            <input type="text" name="branch" onChange={(e)=>setFormdata({...formdata,branch:e.target.value})}/>
            <br/>
            <input type="submit" value="submit"/>
        </form>
        </div>
    )
}
export default Forms;