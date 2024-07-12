import './Footer.css';
import { useState } from 'react';
import { FaPortrait } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { HiMiniRocketLaunch } from "react-icons/hi2";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const card = [
    { title: 'hello@xyloinc.com' },
    { title: 'career@xyloinc.com' },
    { title: 'sapcoe@xyloinc.com' },
    { title: 'Ph: +91 9791135646' },
    { title: 'Home', link: '/home' },
    { title: 'About us', link: '/about us' },
    { title: 'Our products', link: 'product' },
    { title: 'Our services', link: '/service' },
    { title: 'Contact Us', link: '/contact us' },
    { icon: <FaPortrait />, title: 'Portfolio', link: '/contact us' },
    { icon: <FiInstagram />, title: 'Instagram', link: '/contact us' },
    { icon: <BsTwitterX />, title: 'X.com', link: '/contact us' },
    { icon: <FaLinkedin />, title: 'LinkedIn', link: '/contact us' }
  ];

  return (
    <div className='bg-midnightblue font-display text-white p-10 mt-20'>
      <div className='grid grid-cols-12'>
        <div className="col-span-4 col-start-1">
          <div>
            <p className="text-sm my-4">
              Reach out and connect with us today! Drop us a message and let's start the conversation. 
              We're here to assist you every step of the way.
            </p>
          </div>
          <div className="mb-10">
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <br/>
              <input className="box" name="name" value={formData.name} onChange={handleChange} />
              <br/>
              <label>Email</label>
              <br/>
              <input className="box" name="email" value={formData.email} onChange={handleChange} />
              <br/>
              <label>Message</label>
              <br/>
              <div className='flex'>
                <input className="box mr-3" name="message" value={formData.message} onChange={handleChange} />
                <HiMiniRocketLaunch type='submit' className='mt-3 cursor-pointer size-4' />
              </div>
            </form>
          </div>
        </div>
        <div className="col-span-2 col-start-6">
          <h1 className='text-xl font-semibold mt-3 mb-6'>
            Give us a ping
          </h1>
          {card.slice(0, 4).map((key, index) => (
            <p className='my-4 text-md' key={index}>{key.title}</p>
          ))}
        </div>
        <div className="col-span-2 col-start-9">
          <h1 className='text-xl font-semibold mt-3 mb-6'>
            Quick links
          </h1>
          {card.slice(4, 9).map((key, index) => (
            <div className='my-4 text-md hover:underline' key={index}>
              <a href={key.link}>{key.title}</a>
              <br/>
            </div>
          ))}
        </div>
        <div className="col-span-2">
          <h1 className='text-base font-semibold mt-3 mb-6'>
            Follow US
          </h1>
          {card.slice(9).map((key, index) => (
            <div className='my-4 text-md hover:underline flex' key={index}>
              <div className='mr-2 mt-1'>
                {key.icon}
              </div>
              <a href={key.link}>{key.title}</a>
              <br/>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className='flex justify-center'>
        <FaRegCopyright className='mt-3 size-5' />
        <p className='ml-3 mt-3'>2024 XYLOINC. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
