import React from 'react'
import homeimg  from  '../assets/homeBackgorund.png'
import morf1  from  '../assets/morf1.png'
import morf2  from  '../assets/morf2.png'

const AbouContainer = () => {
  return (
      <div className='Aboutmain h-screen  w-full relative px-[70px]'>
          <div className='h-full  w-full absolute top-0 left-0 pt-[15vh]' >
            <img src={homeimg} className='  h-full  w-full  object-cover z-[-1]' alt="" />
          </div>
            <div className='morf1 absolute   bottom-0 left-0 '>
              <img src={morf2} className='' alt="" />
            </div>
            <div className="heading h-full w-full flex justify-start  items-center  relative z-[9999]">
               <div className='headingwraper text-white  w-[40%]   flex  flex-col items-start  gap-3 '>
                 <div className='mainheading leading-[5rem] tracking-tighter'>
                  <div className='text-[24px]  text-[#FA7C0B] font-semibold'>About US</div>
                  <div className='text-[64px]'>Shadient.co </div>
                 </div>
                <p  className='text-[#ffffff]/60 leading-[1.5rem]'>
                Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros </p>
              <div className='Emailwraper flex w-[80%] gap-2 '>
                  <button className='px-6  py-2 rounded-full  bg-[#FFA800]  text-black font-medium'>Contact</button>
                </div>
    
               </div>
            </div>
            <div className='morf2 absolute top-0 right-0  '>
              <img src={morf1} className='' alt="" />
            </div>
          </div>
  )
}

export default AbouContainer