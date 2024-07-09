import React from 'react'
import image from "../../assets/support.png"
const Sapsupport:React.FC = () => {
  return (
    <div className='p-20 h-screen bg-white  grid grid-cols-12'>

    <div className='max-h-full col-span-7 flex flex-col justify-center  mb-10 p-10 col-start-1'>
        <h1 className='text-6xl  font-semibold mb-10'>SAP Support and Maintenance</h1>

        <p className='text-base'>At XYLOINC, we specialize in supporting our clients through both the implementation and ongoing application management services (AMS) phases.
        Our dedicated team ensures seamless transitions during implementation and provides comprehensive support to optimize performance and maximize the value of our solutions for our clients.</p>
    </div>
    <div className='col-span-5'>
      <img src={image}/>
    </div>


    </div>
  )
}

export default Sapsupport