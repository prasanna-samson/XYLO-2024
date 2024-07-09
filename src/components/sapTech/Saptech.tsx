import React from 'react'
import image from '../../assets/sapTech.png'
const Saptech : React.FC = () => {
  return (
    <div className='p-20 mb-8 h-screen bg-xylo'>

            <div className='grid grid-cols-12'>
                <div className=' col-start-1 col-span-4 border rounded-xl shadow-md h-auto flex flex-col justify-between bg-white'>
                    <h1 className='text-4xl font-semibold ml-4 my-4 border-b-2 border-black'>SAP Tech Solutions</h1>
                    <img src={image} className='w-fit my-auto'/>
                    <p className='text-sm text-start p-8 '>Our expert team ensures seamless SAP implementation tailored to your needs, maximizing efficiency and driving results. Partner with us for expert guidance and transformative solutions.</p>
                </div>
                <div className='col-start-6 col-span-7'> 
                    <div className='   bg-white p-10 m-10 mt-0 shadow'>
                     <div className='flex p-2'>   
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    className="size-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
                    </svg>
                    <h1 className='font-bold mt-2 ml-4'> Consultation</h1>
                    </div>
                    
                    <p className='text-sm p-2'>Our team's extensive expertise lies in crafting resilient ecosystems and business solutions tailored to the intricacies of each process flow.
                    XYLOINC's SAP consulting services span beyond traditional boundaries, encompassing emerging technologies like Data Analytics & Reporting, Cloud Platform integration, Industry 4.0 SCM Solutioning, Non-ERP Integration, and streamlined data flow management.</p>
                </div>
                <div className='   bg-white p-10 m-10 mt-0 shadow'>
                     <div className='flex p-2'>   
                     <svg xmlns="http://www.w3.org/2000/svg" 
                     fill="none" 
                     viewBox="0 0 24 24" 
                     stroke-width="1.5" 
                     stroke="currentColor" 
                     className="size-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                    </svg>

                    <h1 className='font-bold mt-2 ml-4'>SAP BTP Solutions</h1>
                    </div>
                    
                    <p className='text-sm p-2 '>Experience our SAP BTP Expertise on  analytics, artificial intelligence, application development, automation, and integration. Our Solutions not limited to platform as a service (PaaS) or software as a service (SaaS)</p>
                </div>
                    
                   
                </div>
                </div>

            </div>

    
  )
}

export default Saptech