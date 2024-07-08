import { useState } from 'react'
import './App.css'
import NavBar from './components/navBar/NavBar';
import Homepage from './Pages/HomePage/Homepage';
import Whyus from './Pages/whyUspage/Whyus';
import Sap from './Pages/sapService/Sap';

function App() {
 

  return (
    <>
   <NavBar/>
  <Homepage/>
  <Whyus/>
  <Sap/>
  </>
  )
}

export default App
