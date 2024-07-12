import React from 'react';
import earth from '../../assets/earth.gif';

const Homepage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 font-display bg-gradient-to-r from-xylo via-white to-white p-4 md:p-10">
      <div className="mb-10 flex justify-center md:justify-start">
        <img src={earth} alt="earth gif" className="w-full max-w-md md:max-w-none" />
      </div>
      <div className="flex flex-col justify-center text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-semibold mb-2 md:mb-5">Innovate, Integrate, Excel:</h1>
        <h1 className="text-3xl md:text-5xl font-semibold mb-2 md:mb-5">XYLOINC - Your Strategic</h1>
        <h1 className="text-3xl md:text-5xl font-semibold mb-2 md:mb-5">SAP Partner</h1>
        <p className="text-sm md:text-md font-light my-3 mb-5">
          Empower Your Enterprise with Tailored SAP Services for Sustainable Growth
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="btn bg-myblue text-white py-2 px-4 rounded font-medium hover:bg-blue-700 transition duration-300">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
