import React, { useState } from 'react'
import './welcome.css'
import logo from '../Assets/logo.jpg'
import Count from './count'
import { Link } from 'react-router-dom'
import cart from '../Assets/cart_icon.png'
const Welcome = () => {
    const [menu, setmenu] = useState("home");
    return (
        <div className='maindiv'>
            <nav className='fixed-navbar'>

                <ul>
                    <li onClick={() => { setmenu("home") }}><a style={{ textDecoration: 'none', color: '#626262', fontSize: '500' }} >Home</a>{menu === "home" ? <hr /> : <></>}</li>
                    <li onClick={() => { setmenu("about") }}><a style={{ textDecoration: 'none', color: '#626262', fontSize: '500' }} >About</a>{menu === "about" ? <hr /> : <></>}</li>
                    <li onClick={() => { setmenu("Courses") }}><a style={{ textDecoration: 'none', color: '#626262', fontSize: '500' }}>Courses</a>{menu === "Courses" ? <hr /> : <></>}</li>
                    <li onClick={() => { setmenu("Contact") }}><a style={{ textDecoration: 'none', color: '#626262', fontSize: '500' }}>Contact</a>{menu === "Contact" ? <hr /> : <></>}</li>
                    <div className="nav-login-cart">
                    <Link to='/login'><button>Login/signup</button></Link>
                    <Link to='/cart'><img src={cart} alt="" /></Link>
                    <div className="nav-cart-count">0</div>
                </div>
                </ul>
                <input type="text" placeholder='search for courses' spellCheck='false' />
                <h3>We have the largest Collection of Courses</h3>
                <Count />




            </nav>


        </div>
    )
}
export default Welcome;