import React from 'react';
import image from '../../assets/sap.png';

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
    <div className="h-screen bg-gradient-to-r from-xylo via-white to-white py-5">
      <h1 className="text-center text-6xl font-bold py-4">SAP Services</h1>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-3 flex justify-center items-center h-fit">
          <img src={image} alt="SAP" className="size-max" />
        </div>
        <div className="col-span-3 grid grid-cols-2 gap-4">
          {sapcard.map((card, index) => (
            <div key={index} className="group p-2 rounded cursor-pointer">
              <div className="flex items-center">
                <h1 className="text-md flex justify-start group-hover:text-myblue">{card.title}<span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg></span></h1>
                
              </div>
              <div className="hidden group-hover:block group-hover:ease-in-out group-hover:duration-700 text-sm">
                {card.content}
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sap;
