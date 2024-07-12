import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Homepage from './Pages/HomePage/Homepage';
import Whyus from './components/whyUspage/Whyus';
import Sap from './components/sapService/Sap';
import Slidebar from './components/slide/Slidebar';
import Saptech from './components/sapTech/Saptech';
import Sapsupport from './components/maintain/Sapsupport';
import Unlock from './components/connectivity/Unlock';

import Footer from './components/lastPage/Footer';
import Signup from './components/lastPage/Signup';


function App() {
  return (
 
    <>
      <NavBar/>
      {/* <Routes>
        <Route path='/About' element={ <About/>}/>
        <Route path='/Conduct' element={ <Conduct/>}/>
      </Routes> */}
      <Homepage></Homepage>
      <Whyus></Whyus>
      <Sap></Sap>
      <Slidebar></Slidebar>
      <Saptech></Saptech>
      <Sapsupport></Sapsupport>
      <Unlock></Unlock>
      <Signup></Signup>
      <Footer></Footer>
    </>
    

  );
}

export default App;
