import React from 'react';
import './Registerform.css';

const Registerform = () => {
  return (
    <div className='forms'>
      <form>
        <div className='input-container'>
          <div className='firstinput'>
            <p className='para'>General Information</p>
            <div className='input1'>
              <input type='text' name='firstname' placeholder='First Name' />
            </div>
            <div className='input1'>
              <input type='text' name='lastname' placeholder='Last Name' />
            </div>
            <div className='input1'>
              <input type='email' name='email' placeholder='Email' />
            </div>
            <div className='input1'>
              <input type='text' name='contact' placeholder='Contact Number' />
            </div>
          </div>
          <div className='secondinput'>
            <p className='para'>Personal Information</p>
            <div className='input2'>
              <input type='text' name='street' placeholder='Street' />
            </div>
            <div className='input2'>
              <input type='text' name='town' placeholder='Town/City' />
            </div>
            <div className='input2'>
              <input type='text' name='pincode' placeholder='Pincode' />
            </div>
            <div className='input2'>
              <input type='text' name='country' placeholder='Country' />
            </div>
            <div className='input2'>
            <input type="submit" value="Register"/>
          </div>
          </div>
  
        </div>
      </form>
    </div>
  );
};

export default Registerform;
