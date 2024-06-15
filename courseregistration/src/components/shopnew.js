import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Registerform from "./Registerform"

function Shopnew(){
    const [data,setData] = useState([])
    useEffect(()=>{
      axios.get('http://localhost:1234/getallproduts').then((res)=>{
        setData(res.data)
      })
    },[])
    
    return(
        <>
            <h1>Courses</h1>
            <div className="products-list">
            {
              data.map((ele,i)=>{
                return (
                  <div className="card" key={i}>
                    <img src={`http://localhost:1234/images/${ele.productpic}`} alt="" />
                    <p>{ele.title}</p>
                    <p>{ele.price}</p>
                    <p>{ele.category}</p>
                    <Link to="../Registerform">Register</Link>

                    
                  </div>
                )
            })
          }
          </div>
            
        </>
    )
}
export default Shopnew