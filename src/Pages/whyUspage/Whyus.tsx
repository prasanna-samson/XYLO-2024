import React, { useEffect, useState } from 'react';
import './Whyus.css';

interface Card {
  title: string;
  icon: JSX.Element;
}

const Whyus: React.FC = () => {
  const cards: Card[] = [
    {
      title: 'Extensive Expertise (30+ Solution Architects)',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 md:w-12 md:h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
          />
        </svg>
      ),
    },
    {
      title: 'Exceptional Customer Support',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 md:w-12 md:h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
          />
        </svg>
      ),
    },
    {
      title: 'Supporting 10+ Countries',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 md:w-12 md:h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
      ),
    },
    {
      title: 'Tailored Solutions through our CoE',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 md:w-12 md:h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
          />
        </svg>
      ),
    },
    {
      title: '130+ Workforce in ODC',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 md:w-12 md:h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
          />
        </svg>
      ),
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex(getRandomIndex());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getRandomIndex = (): number => {
    return Math.floor(Math.random() * cards.length);
  };

  const a: number = selectedIndex;
  const b: number = (selectedIndex + 1) % cards.length; 
  const c: number = (selectedIndex + 2) % cards.length; 
  const d: number = (selectedIndex + 3) % cards.length;
  const e: number = (selectedIndex + 4) % cards.length;
  return (
    <div className='bg-white h-screen'>
      <div className='grid grid-cols-5'>
        <div className="card-item col-start-3 border-b-2">
          {cards[a].icon}
          <p className="text-center mt-2">{cards[a].title}</p>
        </div>
      </div>

      <div className='grid grid-cols-3 mt-20'>
        <div className="card-item col-start-1 border-b-2">
          {cards[b].icon}
          <p className="text-center mt-2">{cards[b].title}</p>
        </div>    

        <div className=" flex items-center col-start-2">
          <div className="mt-8 text-center shadow-xl p-5">
            <h1 className="text-3xl font-bold ">Why Us</h1>
            <p className="mt-4 max-w-md text-center">
              Our success is built on innovation, dedication, quality, and teamwork, driving us to deliver exceptional software solutions globally.
            </p>
          </div>
        </div>
        <div className="card-item col-end-auto ml-auto border-b-2">
          {cards[c].icon}
          <p className="text-center mt-2">{cards[c].title}</p>
        </div>
      </div>

      <div className='grid grid-cols-4 mt-20'>
        <div className="card-item col-start-2 border-b-2">
          {cards[d].icon}
          <p className="text-center mt-2">{cards[d].title}</p>
        </div>    

        <div className="card-item col-end-auto border-b-2">
          {cards[e].icon}
          <p className="text-center mt-2">{cards[e].title}</p>
        </div>
      </div>
    </div>    
  );
};

export default Whyus;
