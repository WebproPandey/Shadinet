import React from 'react'
import Logo from '../assets/Frame.png'
import LogoText from '../assets/Shadient.co.png'

const Navbar = () => {
  return (
    <div className='  w-full flex   justify-between   bg-black/10 fixed  top-0 left-0 px-[70px] h-[15vh] z-[999] '>
         <div className="logo flex w-[20%]  gap-2 justify-start  items-center ">
            <img src={Logo} alt="" />
             <img src={LogoText} alt="" />
         </div>
         <div className="MenuDropDwon w-[60%]  flex justify-center items-start   h-full">
            <button className='bg-[#313131] flex flex-col  justify-center   items-center gap-[1vh]  w-[28%] py-3  rounded-br-2xl rounded-bl-2xl'>
                <div className='line h-[2px] w-10 bg-white'></div>
                <div className='line h-[2px] w-10 bg-white'></div>
                <div className='line h-[2px] w-10 bg-white'></div>
            </button>
         </div>
         <div className="rightSie w-[20%] flex justify-end  items-center ">
            <button className='px-10  py-[0.6rem]  rounded-full  border-[1px]  border-[#FFA800] text-[#FFA800]'>Contact</button>
         </div>
    </div>
  )
}

export default Navbar