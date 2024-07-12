
import image from '../../assets/slideFour.png';

interface Card {
  title: string;
  content: string;
}

const SlideFourCard: Card[] = [
  {
    title: 'Global Collaboration and Go Lives:',
    content: 'Our Work force has completed 28+ Go Lives joining hands with multiple teams across globe. These Includes SAP R3, ECC & S/4 HANA.',
  },
  {
    title: 'Efficient Change Request Handling:',
    content: 'Supporting our clients on Change Requests with short span with deep root understanding.',
  },
  {
    title: '24/7 Support and AMS Projects:',
    content: 'Successfully delivering 10+ AMS Projects on 16+ Core Modules around the clock.',
  },
  {
    title: 'Comprehensive Module Support and Specializations: ',
    content: 'We are currently supporting 30+ modules on SCM, CRM, FinOps,, Master Data, CPI, Analytics & Reporting and Non ERP Integration not limited to loT, Mobile App development and Fiori.',
  },
 
];

function SlideFour() {
  return (
    <div className='grid grid-cols-12  font-display bg-gradient-to-r py-20 h-max from-xylo via-white to-white'>
    <h1 className='col-span-12  col-start-2 text-4xl font-semibold text-left border-b-6 my-10'>
      Expert SAP Consultation <br />Services
    </h1>
    
    <div className='col-span-3 col-start-2'>
      {SlideFourCard.slice(0, 2).map((card, index) => (
        <div key={index} className='text-left my-5'>
          <h1 className='font-semibold my-3'>{card.title}</h1>
          <p className='text-sm mb-3'>{card.content}</p>
          <hr className='border-black border-1' />
        </div>
      ))}
    </div>
    <div className='col-span-3 col-start-6'>
      {SlideFourCard.slice(2, 6).map((card, index) => (
        <div key={index} className='text-left my-5'>
          <h1 className='font-semibold my-3'>{card.title}</h1>
          <p className='text-sm mb-3 overflow-y-hidden'>{card.content}</p>
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

export default SlideFour;
