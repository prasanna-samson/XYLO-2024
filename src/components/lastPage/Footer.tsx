import './Footer.css';
import { FaPortrait } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
const Footer = () => {

  const card=[{

          title:'hello@xyloinc.com',
  },
  {
    title:'career@xyloinc.com',
  },

  
  {
    title:'sapcoe@xyloinc.com',
  },
  
  {
    title:'Ph: +91 9791135646',
  },
  
  {
    title:'Home',
    link:'/home'
  },
  
  {
    title:'About us',
    link:'/about us'
  },
  
  {
    title:'Our products',
    link:'product'
  },
  
  {
    title:'Our services',
    link:'/service'
  },
  
  {
    title:'Contact Us',
    link:'/contact us'
  },
  {
    icon:<FaPortrait />,
    title:'Portfolio',
    link:'/contact us'
  },
  {
    icon:<FiInstagram />,
    title:'Instagram',
    link:'/contact us'
  },
  {
    icon:<BsTwitterX />,
    title:'X.com',
    link:'/contact us'
  },
  {
    icon:<FaLinkedin />,
    title:'LinkedIn',
    link:'/contact us'
  },
]


  
  return (
    <div className='bg-midnightblue text-white p-10 mt-20'>

        <div className='grid grid-cols-12'>

              <div className="col-span-4 col-start-1 ">
                <div >
                  <p className="text-sm my-4">Reach out and connect with us today! Drop us a message and let's start the conversation. We're here to assist you every step <br/>of the way.</p>
                  </div>
              <div className="mb-10">    
              <form>
                <label >Name</label>
                <br/>
                <input className="box"/>
                <br/>
                <label>Mail</label>
                <br/>
                <input className="box"/>
                <br/>
                <label>Message</label>
                <br/>
                <input className="box"/>
                <br/>
              </form>
              </div> 
            </div>

              <div className="col-span-2 col-start-6 ">
                <h1 className='text-xl font-semibold mt-3 mb-6'>
                Give us a ping
                </h1>

                { card.slice(0,4).map((key)=>(
                <p className='my-4 text-md'>{key.title}</p>
                  ))}
                
              </div>
              <div className="col-span-2 col-start-9">
                <h1 className='text-xl font-semibold mt-3 mb-6'>
                Quick links
                </h1>
                { card.slice(4,9).map((key)=>(
                  <div className='my-4 text-md hover:underline'>
                <a href={key.link}>{key.title}</a>
                <br/>
                  </div>
                  ))}
              </div>
              
              <div className="col-span-2">
                <h1 className='text-base font-semibold mt-3 mb-6'>
                Follow US
                </h1>

                { card.slice(9,).map((key)=>(
                  <div className='my-4 text-md hover:underline flex '>
                <div className='mr-2 mt-1'>    
                {key.icon}
                </div>
                <a href={key.link}> {key.title}</a>
                <br/>
                  </div>
                  ))}
                
              </div>

        </div>

      <hr/>
            <div className='flex justify-center'>
            <FaRegCopyright className='mt-3 size-5'/>
              <p className='ml-3 mt-3'>2024 XYLOINC. All rights reserved.</p>
            </div>

    </div>
  )
}

export default Footer