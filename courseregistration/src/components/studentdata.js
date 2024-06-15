import axios from "axios";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function Studentdata() {
    const [student, setStudent] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:1234/getstuddata') //  with your API endpoint
        .then((response) => {
          setStudent(response.data.studentdata);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
    return(
        <div>
            <h1>Studentdata</h1>
            <table border={1} align="center" cellSpacing={0}>
                <tr>
                    <th>S.No </th>
                    <th>Name </th>
                    <th>Rollno </th>
                    <th>College </th>
                    <th>Branch </th>
                    <th colSpan={2}>Actions</th>
                </tr>
                {student.map((ele, index,arr) => (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{ele.name}</td>
                        <td>{ele.rollno}</td>
                        <td>{ele.college}</td>
                        <td>{ele.branch}</td>
                        <td><Link to={`/editform/${ele._id}`}><button>Edit</button></Link></td>
                        <td><button>Delete</button></td>
                    </tr>
                ))}
            </table>
        </div>
    )
}
export default Studentdata;