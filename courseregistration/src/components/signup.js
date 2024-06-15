import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './loginsignup.css'
import user from './person.png'
import pass from './password.png'
import ema from './email.png'
import cpass from './cpassword.png'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const LoginSignup = () => {
    const [signdata, setsignupdata] = useState({
        'username': '',
        'email': '',
        'password': '',
        'cpassword': ''

    })

    //For popups

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        // Reload the page
        window.location.reload();
    };
    const handleShow = () => setShow(true);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            signdata.username.trim() === '' ||
            signdata.email.trim() === '' ||
            signdata.password.trim() === '' ||
            signdata.cpassword.trim() === ''
        ) {
            alert('Please fill in all fields');
            return;
        }

        if (signdata.password !== signdata.cpassword) {
            alert('Passwords do not match');
            return;
        }
        console.log(signdata);
        axios.post('http://localhost:1234/addregisteruser', { signdata }).then((res) => {
            // Show the modal popup after successfully saving the details
            handleShow();

        })
            .catch((error) => {
                alert('User Already Exists');
                window.location.reload();
                console.error(error);
            });
        e.target.reset();
    };
    //Adding functionality to form

    const [action, setaction] = useState("Sign Up")

    //For popup




    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Sign Up</div>
                <div className='underline'></div>
            </div>
            <form onSubmit={handleSubmit} autoComplete='off'>
                <div className='inputs'>
                    <div className='input'>
                        <img src={user} alt="" />
                        <input type="text" placeholder='name' name="username" onChange={(e) => setsignupdata({ ...signdata, username: e.target.value })} />
                    </div>
                    <div className='input'>
                        <img src={ema} alt="" />
                        <input type="email" placeholder='email' name="email" onChange={(e) => setsignupdata({ ...signdata, email: e.target.value })} />
                    </div>
                    <div className='input'>
                        <img src={pass} alt="" />
                        <input type="password" placeholder='password' name="password" onChange={(e) => setsignupdata({ ...signdata, password: e.target.value })} />
                    </div>
                    <div className='input'>
                        <img src={cpass} alt="" style={{ width: "25px", height: "25px" }} />
                        <input type="password" placeholder='confirm password' name="cpassword" onChange={(e) => setsignupdata({ ...signdata, cpassword: e.target.value })} />
                    </div>
                    <div className='forgot-pass'>forgot password?<span>click here!</span></div>
                    <div className='submit-container'>
                        <input className={action === "Login" ? "submit gray" : "submit"} type="submit" value="Sign Up" />
                        <Link className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setaction("Login")} to="../Login">Login</Link>
                    </div>
                </div>
            </form>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>Woohoo {signdata.username},you are successfully registered</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save details
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}
export default LoginSignup;
