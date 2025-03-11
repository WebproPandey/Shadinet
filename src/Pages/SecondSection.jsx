import React from 'react'
import Slider from '../components/Slider'

const SecondSection = () => {
  return (
    <div className='SecondSection h-full w-full px-4 py-10 flex flex-col justify-center gap-12'>
        <div className='top w-full flex px-[70px] '>
            <div className='left w-1/2'>
             <div className='text-[40px] font-bold text-white leading-none'>
             Trusted by 200+ companies around the world
             </div>
            </div>
            <div className='right w-1/2'>
             <p className='text-[#ffffff]/60 text-[16px]'>Vulputate molestie molestie amet leo blandit accumsan. Sapien sed amet tellus purus sit odio eget. Diam morbi faucibus vitae neque id in. Nullam sed et dapibus nunc, porta enim orci urna, sit. Lectus ac.</p>
            </div>
        </div>
        <div className='bottom flex flex-col  gap-10'>
            <Slider/>
            <Slider/>
        </div>

    </div>
  )
}

export default SecondSection