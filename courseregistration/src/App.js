import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, Form ,redirect} from 'react-router-dom';

import LoginSignup from './components/signup';
import Login from './components/login';
import Myprofile from './components/myprofile';
import React, { useState, createContext } from 'react';
import Imageupdate from './components/imageupdate';
import Shopnew from './components/shopnew';
import Welcome from './components/welcome';
import Registerform from './components/Registerform';
import Cart from './components/cart';

export const store = createContext();

function App() {

  //For accessing the token

  const [token, settoken] = useState(null)

  return (
    <div className="App">
      {/* calling functional components */}
      {/* <CompA/>
      <ComB/>
      <ComC/>
      <Classcomp1/>
      <Image/> */}
      <store.Provider value={[token,settoken]}>
        <BrowserRouter>
          {/* <Menu/> */}
          <Routes>
            <Route path='/LoginSignup' element={<LoginSignup />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Myprofile' element={<Myprofile />} />
            <Route path='/Imageupdate' element={<Imageupdate/>}/>
            <Route path='/Shopnew' element={<Shopnew/>}/>
            <Route path='/' element={<Welcome/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/Registerform' element={<Registerform/>}/>
          </Routes>
        </BrowserRouter>
      </store.Provider>

    </div>
  );
}

export default App;
