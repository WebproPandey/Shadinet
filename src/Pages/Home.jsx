import React from 'react'
import homeimg  from  '../assets/homeBackgorund.png'
import morf1  from  '../assets/morf1.png'
import morf2  from  '../assets/morf2.png'
import SecondSection from './SecondSection'
import WorkSection from './WorkSection'
import ChooseUsSection from './ChooseUsSection'
import ShowWorkSection from './ShowWorkSection'
import FeedBack from './FeedBack'
import Contact from './Contact'

const Home = () => {
  return (
    <div className='HeroContainer   w-full  relative '>
     

      <div className='heromain h-screen  w-full relative'>
      <div className='h-full  w-full absolute top-0 left-0 pt-[15vh]' >
        <img src={homeimg} className='  h-full  w-full  object-cover z-[-1]' alt="" />
      </div>
        <div className='morf1 absolute   bottom-0 left-0 '>
          <img src={morf2} className='' alt="" />
        </div>
        <div className="heading h-full w-full flex justify-center  items-center ">
           <div className='headingwraper text-white  w-[35%]  flex  flex-col items-start  gap-3 '>
             <div className='mainheading leading-[5rem] tracking-tighter'>
             <div className='text-[96px] font-semibold'>Attract</div>
             <div className="text-[96px] font-semibold bg-gradient-to-r from-[#FA7C0B] to-[#9DE8EE] text-transparent bg-clip-text">
  NewLeads
</div>
            <div className='text-[96px]'>like never</div>
            <div className='text-[96px]'>before</div>
             </div>
            <p  className='text-[#ffffff]/60 leading-[1.5rem]'>Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros </p>
            <div className='Emailwraper flex w-[80%] gap-2 '>
              <input type="email" placeholder='Email' className='w-full rounded-full  outline-none  border px-2 bg-transparent' name="" id="" />
              <button className='px-6  py-2 rounded-full  bg-[#FFA800]  text-black font-medium'>Attact</button>
            </div>

           </div>
        </div>
        <div className='morf2 absolute top-0 right-0  '>
          <img src={morf1} className='' alt="" />
        </div>
      </div>
      <div className='h-[70vh] w-full'>
      <SecondSection/>
      </div>
      <div className='min-h-screen w-full flex  justify-center  items-center p-10 bg-[#110F0F]'>
       <WorkSection/>
      </div>
      <div className='h-[80vh]  w-full'>
        <ChooseUsSection/>
      </div>
      <div className='min-h-screen  w-full  bg-[#110F0F] px-[70px] py-[5rem]'>
        <ShowWorkSection/>
      </div>
      <div className='h-[80vh] w-full px-[70px] py-[5rem]'>
      <FeedBack/>
      </div>
      <div className='h-[85vh]  w-full bg-[#110f0f] py-[5rem] px-[70px] relative '>
        <Contact/>
        <button className='border-[1px] border-[#FFB219] px-6 py-2 rounded-full uppercase  text-[#FFB219] absolute bottom-4 right-14 '>Go to Top</button>
      </div>
     

        
    </div>
  )
}

export default Home