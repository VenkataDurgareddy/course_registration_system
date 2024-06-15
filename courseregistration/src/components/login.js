import React, { useState, useContext } from 'react'
import axios from 'axios'
import { store } from '../App'
import Myprofile from './myprofile'
import { Navigate } from 'react-router-dom'
import pass from './password.png'
import ema from './email.png'
import { Link } from 'react-router-dom'
import './loginsignup.css'
const Login = () => {
    const [token, settoken] = useContext(store)
    const [action, setaction] = useState("Login")
    const [logindata, setlogindata] = useState({
        'email': '',
        'password': ''

    })
    const handleSubmit = (e) => {
        e.preventDefault();
        // if (

        //     logindata.email.trim() === '' ||
        //     logindata.password.trim() === '' 
        // ) {
        //     alert('Please fill in all fields');
        //     return;
        // }
        console.log(logindata);
        axios.post('http://localhost:1234/login', { logindata }).then((res) => settoken(res.data.token))
        .catch((error) => {
            alert('Invalid credentials');
            console.error(error);
            return;
        });
        e.target.reset();
    }
    if (token) {
        return <Navigate to='/Myprofile' />
    }
   



    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Login</div>
                <div className='underline'></div>
            </div>
            <form onSubmit={handleSubmit} autoComplete='off'>
                <div className='inputs'>
                    <div className='input'>
                        <img src={ema} alt="" />
                        <input type="email" placeholder='email' name="email" onChange={(e) => setlogindata({ ...logindata, email: e.target.value })} />
                    </div>
                    <div className='input'>
                        <img src={pass} alt="" />
                        <input type="password" placeholder='password' name="password" onChange={(e) => setlogindata({ ...logindata, password: e.target.value })} />
                    </div>
                    <div className='forgot-pass'>forgot password?<span>click here!</span></div>
                    <div className='submit-container'>
                        <Link className={action === "Backhome" ? "submit gray" : "submit"} to="../">Back to home</Link>
                        <input className={action === "Login" ? "submit gray" : "submit"} type="submit" value="Login" onSubmit={handleSubmit} />
                    </div>
                </div>
            </form>

        </div>

    )
}
export default Login;
