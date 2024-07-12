import React from 'react';
import image from '../../assets/ExpertSAPConsultationServices.png';

interface Card {
  title: string;
  content: string;
}

const SlideOneCard: Card[] = [
  {
    title: 'Tailored Solutions:',
    content: 'Customized consultation to meet your business needs.',
  },
  {
    title: 'Industry Expertise:',
    content: 'Guidance from consultants with deep knowledge across various industries.',
  },
  {
    title: 'Problem-Solving Approach:',
    content: 'Analyze challenges and provide innovative solutions.',
  },
  {
    title: 'Continuous Support:',
    content: 'Ongoing consultation to ensure long-term success.',
  },
  {
    title: 'Roadmap Development:',
    content: 'Create a strategic plan for SAP integration and optimization.',
  },
 
];

function SlideOne() {
  return (
    <div className='grid grid-cols-12  font-display bg-gradient-to-r py-20 from-xylo via-white to-white'>
      <h1 className='col-span-12  col-start-2 text-4xl font-semibold text-left border-b-6 my-10'>
        Expert SAP Consultation <br />Services
      </h1>
      
      <div className='col-span-3 col-start-2'>
        {SlideOneCard.slice(0, 3).map((card, index) => (
          <div key={index} className='text-left my-5'>
            <h1 className='font-semibold my-3'>{card.title}</h1>
            <p className='text-sm mb-3'>{card.content}</p>
            <hr className='border-black border-1' />
          </div>
        ))}
      </div>
      <div className='col-span-3 col-start-6 '>
        {SlideOneCard.slice(3, 6).map((card, index) => (
          <div key={index} className='text-left my-5'>
            <h1 className='font-semibold my-3'>{card.title}</h1>
            <p className='text-sm mb-3'>{card.content}</p>
            <hr className='border-black border-1' />
          </div>
        ))}
      </div>
      <div className='col-span-4 col-start-10'>
        <img src={image} alt="Expert SAP Consultation Services" className='w-3/4' />
      </div>

    </div>
  );
}

export default SlideOne;
