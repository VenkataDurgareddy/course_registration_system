import { useState , useEffect} from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
const Editform=()=>{
    const [formdata,setFormData]=useState({
        'name':'',
        'rollno':'',
        'college':'',
        'branch':''
    })
    const {id}= useParams()
    //console.log(id)

    useEffect(() => {
        axios.get('http://localhost:1234/getstudbyid/'+id) 
          .then((res) => {
            console.log(res.data)
            setFormData(res.data.studentdata);
          })
          .catch((err) =>console.error(err));
      }, []);

      
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formdata)
    axios.put('http://localhost:1234/updatestudentbyid/'+id,formdata)
        .then((res)=>{alert("Data updated succesfully")})
        window.location.href='/Studentdata';

        
    }
    return(
       <div>
        <h1>Edit  Form</h1>
        <form onSubmit={handleSubmit}>
            <label> name</label>
            <input type="text" name="name" value={formdata.name} onChange={(e)=>setFormData({...formdata,name:e.target.value})}/>
            <br/>
            <label>rollno</label>
            <input type="text" name="rollno" value={formdata.rollno} onChange={(e)=>setFormData({...formdata,rollno:e.target.value})}/>
            <br/>
            <label>college</label>
            <input type="text" name="clgname" value={formdata.college} onChange={(e)=>setFormData({...formdata,college:e.target.value})}/>
            <br/>
            <label>branch</label>
            <input type="text" name="branch" value={formdata.branch} onChange={(e)=>setFormData({...formdata,branch:e.target.value})}/>
            <br/>
            <input type="submit" value="update"></input>
        </form>
       </div>
    )
    
}
export default Editform;