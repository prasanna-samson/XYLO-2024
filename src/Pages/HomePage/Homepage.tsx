import React from 'react'
import earth from '../../assets/earth.gif';
import './Homepage.css'
function Homepage() {
  return (

    <div className='md:grid grid-cols-2 '>
           <div className='mb-40'>
            
             <img src={earth} alt='eath gif' className='size-full '/>
            </div> 
            <div className='md:flex flex-col justify-center sd:text-center'>
            
                <h1 className='homeHeading'>Innovate, Integrate, Excel: </h1>
             
                <h1 className='homeHeading'>XYLOINC - Your Strategic  </h1>
                <h1 className='homeHeading'>SAP Partner</h1>
                <p className='text-2xl font-light my-3 mb-5'>Empower Your Enterprise with Tailored SAP Services for Sustainable Growth</p>
                <div>
                    <button className="btn font-medium">Get Started</button>
                </div>
            </div> 


            </div>


  )
}

export default Homepage