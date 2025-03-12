import React from 'react'

const Contact = () => {
  return (
    <div className='h-full w-full  bg-[#FFB219] flex justify-center items-center'>
        <div className='w-full md:w-1/2  flex flex-col  items-center gap-2 px-10'>

        <h1 className='text-black font-bold text-[5vh]  md:text-[40px]'>Let’s discuss the idea</h1>
        <p className='text-[#000000]/60  font-medium text-sm md:text-base text-center'>
        Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. 
        </p>
        <div className='flex w-[70%] gap-2 '>
            <input type="email" placeholder='Your Email' className='w-full  rounded-full py-1 md:py-2 px-2 border-[1px] '  />
            <button className='bg-[#000] text-white uppercase  rounded-full px-6  md:px-4 md:py-2 text-sm md:text-base  font-medium'>Send</button>
        </div>
        </div>


    </div>
  )
}

export default Contact