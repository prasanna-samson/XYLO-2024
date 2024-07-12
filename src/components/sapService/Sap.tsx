import React from 'react';
import image from '../../assets/Sapnew.svg';
import './Sap.css';

interface Card {
  title: string;
  content: string;
}

const Sap: React.FC = () => {
  const sapcard: Card[] = [
    {
      title: 'RISE with SAP and SOAR with Accenture',
      content: 'Become an intelligent finance function - drive your digital finance transformation.'
    },
    {
      title: 'SAP Business Technology Platform',
      content: 'Become an intelligent finance function - drive your digital finance transformation.'
    },
    {
      title: 'Supply chain',
      content: 'Become an intelligent finance function - drive your digital finance transformation.'
    },
    {
      title: 'SAP S/4HANA',
      content: 'Become an intelligent finance function - drive your digital finance transformation.'
    },
    {
      title: 'SAP solutions on cloud',
      content: 'Become an intelligent finance function - drive your digital finance transformation.'
    },
    {
      title: 'Sustainability',
      content: 'Become an intelligent finance function - drive your digital finance transformation.'
    },
    {
      title: 'Finance',
      content: 'Become an intelligent finance function - drive your digital finance transformation.'
    },
    {
      title: 'Industry transformation with SAP solutions',
      content: 'Become an intelligent finance function - drive your digital finance transformation.'
    },
    {
      title: 'Intelligent Talent & HR',
      content: 'Become an intelligent finance function - drive your digital finance transformation.'
    },
    {
      title: 'Sourcing and Procurement',
      content: 'Become an intelligent finance function - drive your digital finance transformation.'
    },
    {
      title: 'Customer experience',
      content: 'Become an intelligent finance function - drive your digital finance transformation.'
    },
    {
      title: 'Intelligent data management',
      content: 'Become an intelligent finance function - drive your digital finance transformation.'
    }
  ];

  return (
    <div className="font-display bg-white grid grid-cols-1 md:grid-cols-12 p-5 gap-10">
      <h1 className="text-center text-4xl font-bold col-span-full">SAP SERVICES</h1>
      
      <div className="col-span-full md:col-span-4 md:col-start-1 flex justify-center">
        <img src={image} alt="SAP" className="md:w-svw w-2/3 m-auto" />
      </div>
      
      <div className="col-span-full md:col-span-4 md:col-start-5 space-y-4">
        {sapcard.slice(0, 6).map((card, index) => (
          <div key={index} className="group rounded cursor-pointer">
            <div className="flex items-center">
              <h1 className="text-sm flex justify-start group-hover:text-myblue transform transition-transform translate-y-10 group-hover:translate-y-0">
                {card.title}
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </span>
              </h1>
            </div>
            <div className="text-transparent pb-2 group-hover:text-black transition-colors duration-700 text-sm">
              {card.content}
            </div>
            <hr />
          </div>
        ))}
      </div>
      
      <div className="col-span-full md:col-span-4 md:col-start-9 space-y-4">
        {sapcard.slice(6).map((card, index) => (
          <div key={index} className="group rounded cursor-pointer">
            <div className="flex items-center">
              <h1 className="text-sm flex justify-start group-hover:text-myblue transform transition-transform translate-y-10 group-hover:translate-y-0">
                {card.title}
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </span>
              </h1>
            </div>
            <div className="text-transparent pb-2 group-hover:text-black transition-colors duration-700 text-sm">
              {card.content}
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sap;
