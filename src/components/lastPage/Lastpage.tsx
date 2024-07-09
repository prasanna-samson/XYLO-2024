import React from 'react'
import Footer from './Footer'
import Signup from './Signup'

const Lastpage: React.FC = () => {
  return (
    <div className='h-screen grid grid-rows-12 '>
        <div className='row-start-2 row-span-3 p-20'>
        <Signup />
        </div>
        <div className='row-start-8'>
        <Footer />
        </div>
    </div>
  )
}

export default Lastpage
