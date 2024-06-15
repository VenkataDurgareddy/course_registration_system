import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
function Cart(){
    const [data,setData]=useState({
        'title':'',
        'price':'',
        'category':'',
        'productpic':''
    })
    const {id}= useParams()
    useEffect(() => {
        axios.get('http://localhost:1234/getproductbyid/'+id) 
          .then((res) => {
            console.log(res.data)
            setData(res.data.productdata);
          })
          .catch((err) =>console.error(err));
      }, []);
    
    return(
        <>
            <h1>Courses</h1>
            <div className="products-list">
           
                return (
                  <div className="card">
                    <img src={`http://localhost:1234/images/${data.productpic}`} alt="" />
                    <p>{data.title}</p>
                    <p>{data.price}</p>
                    <p>{data.category}</p>

                    
                  </div>
                )
          </div>
            
        </>
    )
}
export default Cart