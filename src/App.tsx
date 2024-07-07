import { useState } from 'react'
import './App.css'
import NavBar from './components/navBar/NavBar';
import Homepage from './Pages/HomePage/Homepage';
import Whyus from './Pages/whyUspage/Whyus';

function App() {
 

  return (
    <>
   <NavBar/>
  <Homepage/>
  <Whyus/>
  </>
  )
}

export default App
