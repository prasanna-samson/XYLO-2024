import image from '../../assets/signup.png';
import './Signup.css';

const Signup = () => {
  return (
    <div className='grid grid-cols-12 font-display bg-midnightblue my-8 h-fit max-h-60 border-radius'>
      <div className='col-start-1 col-span-4'>
        <img src={image} className='w-max -translate-y-32' alt="Signup visual" />
      </div>
  
      <div className='col-start-6 col-span-8 text-white'>
        <h1 className='text-4xl my-4 font-semibold'>Sign up to our <br />newsletter.</h1>
        <p className='max-w-xl my-4'>Stay updated with exclusive content, offers, and insights. Subscribe to our newsletter for valuable updates.</p>
        <div className="flex justify-between p-1 rounded-md bg-white text-black max-w-72">
          <input type='email' placeholder='Enter your email' id="email" className='flex-grow p-2 rounded-l-md' aria-label="Email" />
          <button className='bg-midnightblue p-2 text-white rounded-r-md animate-pulse' type="button">GO</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
