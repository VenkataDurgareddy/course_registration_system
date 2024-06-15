import React from 'react'
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div>
        <Link to="./LoginSignup"><button class="btn btn-primary" style={{margin:"10px"}}>Register</button></Link>
        <Link to="./Login"><button class="btn btn-primary">Login</button></Link>
    </div>
  )
}
export default Nav;
