import React from 'react'
import  chooseimg from '../assets/chooseusimg.png'

const ChooseUsSection = () => {
  return (
    <div className='h-full  w-full flex justify-center  items-center '>
        <div className="left w-[60%] md:w-[40%] h-full flex  items-center  justify-center">
          <img src={chooseimg} className='h-full w-full   object-contain' alt="" />
        </div>
        <div className="right w-1/2 md:w-[40%] flex gap-4 flex-col" >
         <h1 className='text-[5vh] md:text-[40px]  text-white'>Why choose us</h1>
         <p className='text-[#ffff]/60 text-sm md:text-[16px]'>Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. </p>
         <button className=' py-1 md:py-2 px-4 text-sm md:text-base md:w-[40%]    hover:scale-90 transition-transform duration-200 ease-linear  hover:bg-[#FFA800] hover:text-[#000] border-[#FFA800] border-[1px] rounded-full text-[#FFA800] uppercase' >Let's connect</button>
        </div>
        
    </div>
  )
}

export default ChooseUsSection