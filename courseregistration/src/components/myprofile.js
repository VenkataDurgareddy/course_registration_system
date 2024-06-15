import React, { useContext, useState, useEffect } from 'react'
import { store } from '../App';
import axios from 'axios';
import Login from './login';
import { Navigate } from 'react-router-dom';
import Shopnew from './shopnew';
import profile from './profile.jpg'
import { Link } from 'react-router-dom';
import cart from '../Assets/cart_icon.png'
import './myprofile.css'
const Myprofile = () => {
  const [token, settoken] = useContext(store)
  const [data, setdata] = useState(null)
  useEffect(() => {
    axios.get('http://localhost:1234/myprofile', {
      headers: {
        'x-token': token
      }

    }).then(res => setdata(res.data)).catch((err) => console.log(err))
  }, [])
  if (!token) {
    return <Navigate to='/Login'/>
      
  }
  return (
    <div>
      {
        data &&
          <><img style={{width:'60px',height:'60px',marginLeft:"1000px"}} src={profile} alt="" />
          <h5 style={{textAlign:'right',marginRight:"190px",marginTop:'-40px'}}>{data.username}</h5>
           <div className="nav-login-cart2">
                    
                    <Link to='../cart'><img src={cart} alt="" /></Link>
                    <div className="nav-cart-count">0</div>
            </div>
          <Shopnew/>
          <button class="btn btn-primary" onClick={() => settoken(null)} style={{margin:"30px"}}>Logout</button>
       </>
          
      }
    </div>
  )
}
export default Myprofile;
