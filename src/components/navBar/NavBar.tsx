import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/xyloLogo.png';
import './NavBar.css';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [solutionOpen, setSolutionOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const menuClick = () => {
    setOpen(!open);
  }

  const toggleSolutionDropdown = () => {
    setSolutionOpen(!solutionOpen);
  }

  const toggleServiceDropdown = () => {
    setServiceOpen(!serviceOpen);
  }

  return (
    <nav className="navbar bg-white font-display p-5 px-10 shadow-2xl font-medium">
      <div className='flex justify-between items-center md:max-w-8xl'>
        <img src={logo} alt="logo" className="logo ml-10 mt-1" />
        <button className='menu-button block md:hidden' onClick={menuClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <div className={`menu-content ${open ? "block" : "hidden"} md:flex`}>
          <ul className='menu-list flex-col md:flex-row'>
            <li className="menu-item">
              <Link to="/About">About Us</Link>
            </li>
            <li className="menu-item">
              <Link to="/Conduct">Contact Us</Link>
            </li>
            <li className="menu-item dropdown relative">
              <button onClick={toggleSolutionDropdown} className="flex items-center">
                Solution
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-4 h-4 ml-1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {solutionOpen && (
                <ul className="dropdown-menu absolute top-full mt-1 bg-white shadow-lg rounded-lg">
                  <li className="menu-item"><Link to="/solution/1">Solution 1</Link></li>
                  <li className="menu-item"><Link to="/solution/2">Solution 2</Link></li>
                  <li className="menu-item"><Link to="/solution/3">Solution 3</Link></li>
                </ul>
              )}
            </li>
            <li className="menu-item dropdown relative">
              <button onClick={toggleServiceDropdown} className="flex items-center">
                Service
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-4 h-4 ml-1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {serviceOpen && (
                <ul className="dropdown-menu absolute top-full mt-1 bg-white shadow-lg rounded-lg">
                  <li className="menu-item"><Link to="/service/1">Service 1</Link></li>
                  <li className="menu-item"><Link to="/service/2">Service 2</Link></li>
                  <li className="menu-item"><Link to="/service/3">Service 3</Link></li>
                </ul>
              )}
            </li>
            <li className="menu-item">
              <button className='btn'>Careers</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
