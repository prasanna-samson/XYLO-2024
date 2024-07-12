
import image from '../../assets/slideTwo.png';

interface Card {
  title: string;
  content: string;
}

const SlideTwoCard: Card[] = [
  {
    title: 'Comprehensive Planning: ',
    content: 'Detailed blueprint creation for smooth implementation.',
  },
  {
    title: 'Efficient Deployment: ',
    content: 'Minimize downtime and disruptions during implementation.',
  },
  {
    title: 'Thorough Testing:',
    content: 'Rigorous testing to ensure system functionality and stability.',
  },
  {
    title: 'Training and Adoption:',
    content: 'Training programs to empower your team with SAP knowledge.',
  },
  {
    title: 'Post-Implementation Support:',
    content: 'Continuous assistance for a seamless transition.',
  },
 
];

function SlideTwo() {
  return (
    <div className='grid grid-cols-12 font-display py-20'>
      <h1 className='col-span-12  col-start-2 text-4xl font-semibold text-left border-b-6 my-10'>
      Seamless SAP Implementation <br/>Support
      </h1>
      <div className='col-span-3 col-start-2'>
        <img src={image} alt="Expert SAP Consultation Services" className='w-3/4' />
      </div>
      <div className='col-span-3 col-start-5'>
        {SlideTwoCard.slice(0, 3).map((card, index) => (
          <div key={index} className='text-left my-5'>
            <h1 className='font-semibold my-3'>{card.title}</h1>
            <p className='text-sm mb-3'>{card.content}</p>
            <hr className='border-black border-1' />
          </div>
        ))}
      </div>
      <div className='col-span-3 col-start-9'>
        {SlideTwoCard.slice(3, 6).map((card, index) => (
          <div key={index} className='text-left my-5'>
            <h1 className='font-semibold my-3'>{card.title}</h1>
            <p className='text-sm mb-3'>{card.content}</p>
            <hr className='border-black border-1' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SlideTwo;
