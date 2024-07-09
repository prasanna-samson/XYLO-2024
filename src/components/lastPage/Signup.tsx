
import image from '../../assets/signup.png';
import './Signup.css'
const Signup = () => {
  return (
    <div className='grid grid-cols-12 bg-midnightblue mb-6 h-fit max-h-60 border-radius'>

      <div className='col-start-1 col-span-4'>

          <img src={image} className='w-max -translate-y-32 '/>

      </div>
  
      <div className='col-start-6 col-span-8 text-white '>
          <h1 className='text-4xl  my-4 font-semibold'>Sign up to our <br/>newsletter.</h1>
          <p className='max-w-xl my-4'>Stay updated with exclusive content, offers, and insights. Subscribe to our newsletter for valuable updates. </p>
          <div className="flex justify-between rounded-md bg-white text-black max-w-72">
            <a href="#" className=' ml-3 mt-1'>Regards</a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="size-6 bg-blue-500  rounded-r-md h-7 w-7">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
      </div>



    </div>
  )
}

export default Signup