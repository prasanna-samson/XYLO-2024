import React, { useState } from 'react';
import logo from '../../assets/xyloLogo.png';
import './NavBar.css';
const NavBar = () => {

  const [open,setOpen]=useState(false);
  const menuClick =()=>{
        setOpen(!open);

  }

  return (
    <nav className="bg-white p-5 px-10 shadow-2xl font-medium">
      <div className='md:flex justify-between  md:max-w-8xl '>
      <div className="flex justify-between">
      <img src={logo} alt="logo" className="size-fit ml-10 mt-1" />

          <div className='md:hidden '>
        <button onClick={menuClick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
        </button>
          </div>
      </div>
      <div className={`flex justify-end ${open? "block":"hidden"} md:block `}>
        
        <ul className=' md:flex ml-auto space-y flex-row mt-1 mx-2'>
          <li className="menu">
            <a href="#">About Us</a>
          </li>
          
          <li className= 'menu'>
            <a href="#">Contact Us</a>
          </li>
          <li className="flex menu">
            <a href="#">Solution </a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="size-4 mt-1.5 ml-1.5">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
          </li>
          <li className='flex menu'>
            <a href="#">Service</a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="size-4 mt-1.5 ml-1.5">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
          </li>
          <li>
          <button className='btn'>Careers</button>  
          </li>
        </ul>
        
      </div>
      
      </div>
    </nav>
  );
};

export default NavBar;
