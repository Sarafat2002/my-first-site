import React from 'react'
import Cricket from "../../assets/cricket.png"

const Banner = () => {
  return (
    <div className='mt-10'>
    <div className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 max-w-[91%] mx-auto rounded-2xl'>
        <div className='py-20 flex text-center flex-col items-center gap-3'>
        <img className='w-50 h-45' src={Cricket} alt="" />
        <h1 className='font-bold text-4xl text-white '>Assemble your ultimate dream 11 cricket team</h1>
        <h4 className='text-2xl text-gray-300'>Beyound boundaries beyound limits</h4>
        <button className='px-4 py-3 rounded-sm bg-[#e7fe29]'>Claim free creadits</button>
        </div>
    </div>
    </div>
  )
}

export default Banner