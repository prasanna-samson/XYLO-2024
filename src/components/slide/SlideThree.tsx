import React from 'react';
import image from '../../assets/ExpertSAPConsultationServices.png';

interface Card {
  title: string;
  content: string;
}

const SlideThreeCard: Card[] = [
  {
    title: 'Digital Transformation:',
    content: 'Unlock the full potential of your business with S/4HANA.',
  },
  {
    title: 'Real-Time Insights:',
    content: 'Access to real-time data with various analytical tools for informed decision-making.',
  },
  {
    title: 'Enhanced Efficiency:',
    content: 'Streamlined processes and automation for increased productivity.',
  },
  {
    title: 'Scalability: ',
    content: 'Grow your business without worrying about system limitations.',
  },
  {
    title: 'Future-Readiness:',
    content: 'Stay ahead of the curve with cutting-edge technology. Rise with SAP & Grow with SAP.',
  },
 
];

function SlideThree() {
  return (
    <div className='grid grid-cols-12 h-screen bg-gradient-to-r from-xylo via-white to-white'>
      <h1 className='col-span-12  col-start-2 text-4xl font-semibold text-left border-b-6 my-10'>
      Elevate Your Business with <br/>SAP S/4HANA
      </h1>
      
      <div className='col-span-3 col-start-2'>
        {SlideThreeCard.slice(0, 3).map((card, index) => (
          <div key={index} className='text-left my-5'>
            <h1 className='font-semibold my-3'>{card.title}</h1>
            <p className='text-sm mb-3'>{card.content}</p>
            <hr className='border-black border-1' />
          </div>
        ))}
      </div>
      <div className='col-span-3 col-start-6'>
        {SlideThreeCard.slice(3, 6).map((card, index) => (
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

export default SlideThree;
