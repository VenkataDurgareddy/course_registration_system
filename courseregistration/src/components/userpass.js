import { useState } from "react";
import axios from "axios";
const Submitform = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    rollno: "",
    college: "",
    email: "",
    profilepic:"",
  });
  let backend_api="http://localhost:1234/adduserpass"
  const handleSubmit=(e)=>
  {
      const Inputfeild=new FormData()
      Inputfeild.append('myfile',formdata.profilepic,formdata.profilepic.name)
      Inputfeild.append('rollno',formdata.rollno)
      Inputfeild.append('college',formdata.college)
      Inputfeild.append('email',formdata.email)
      Inputfeild.append('name',formdata.name)
      e.preventDefault();
      console.log(Inputfeild)
      axios.post(backend_api,Inputfeild).then((res)=>
      {
        console.log(res.body)
        if(res.status===200)
        {
          alert(res.data.msg)
        }
      })
  }

  return (
    <div>
      <br/>
      <h1> Student Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name:  </span>
          <input type="text" name="name" onChange={(e) => setFormdata({ ...formdata, name: e.target.value })} />
        </label>
        <br />
        <label>
          Rollno:   
          <input type="text" name="rollno" onChange={(e) => setFormdata({ ...formdata, rollno: e.target.value })} />
        </label>
        <br />
        <label>
          College: 
          <input type="text" name="college" onChange={(e) => setFormdata({ ...formdata, college: e.target.value })} />
        </label>
        <br />
        <label>
          Email: 
          <input type="email" name="email" onChange={(e) => setFormdata({ ...formdata, email: e.target.value })} />
        </label>
        <br/>
        <label>
          Upload: 
          <input type="file" name="myfile" onChange={(e) => setFormdata({ ...formdata, profilepic: e.target.files[0] })} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Submitform;