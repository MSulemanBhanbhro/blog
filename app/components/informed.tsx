import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='w-full h-auto bg-gray-100 p-10 flex flex-col items-center justify-center my-8 rounded-md'>
        <div className='text-center'>
            <h1 className='text-3xl font-bold mb-4'>Stay Informed</h1>
            <p className='my-2'>Subscribe to our newsletter and never miss an update on the latest in AI.</p>
        </div>
        <div className='flex items-center gap-4'>
            <input type="text" name="" id="" placeholder='Enter Your Email' className='w-[390%] p-4 rounded-full my-2'/>
            <button className='w-[190%] p-4 rounded-full my-2 bg-[#1F2937] text-white'>Subscribe</button>
        </div>

    </div>
    </>
  )
}

export default Contact