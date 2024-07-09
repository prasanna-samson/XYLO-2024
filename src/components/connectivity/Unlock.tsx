import React from 'react'
import image from '../../assets/usc.png'
const Unlock:React.FC = () => {
  return ( 
  <div className='h-screen grid-rows-3'>
    <div className=' bg-white  row-start-2 m-40 rounded-md shadow-xl p-5 grid grid-cols-12'>

        <div className='col-start-1  col-span-5'>
            <img src={image} className='h-fit'/>

        </div>
        <div className='col-start-7 flex flex-col justify-center col-span-7'>

            <h1 className='text-5xl font-semibold my-6'>Unlock seamless connectivity</h1>
            <div>
                <p className='max-w-md text-sm my-6'>
                Industry 4.0 is built on nine technology pillars. 
                These innovations bridge the physical and  
                digital worlds and make intelligent and autonomous systems possible.</p>
                <ul className='list-disc ml-10 text-sm'>
                    <li>Big Data and AI analytics</li>
                    <li>Vertical and horizontal integration </li>
                    <li>Cloud computing </li>
                    <li>Augmented reality</li>
                    <li>Industrial Internet of Things</li>
                    <li>Additive manufacturing (also known as 3D printing) </li>
                    <li>Autonomous robots</li>
                    <li>Simulation or digital twins </li>
                    <li>Cybersecurity</li>
                </ul>
            </div>

        </div>

    </div>
    </div>
  )
}

export default Unlock