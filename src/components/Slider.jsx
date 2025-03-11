import React from 'react'
import slider1 from '../assets/slider1.png'
import slider2 from '../assets/slider2.png'
import slider3 from '../assets/slider3.png'
import slider4 from '../assets/slider4.png'
import slider5 from '../assets/slider5.png'
import slider6 from '../assets/slider6.png'
import slider7 from '../assets/slider7.png'
import slider8 from '../assets/slider8.png'
import slider9 from '../assets/slider9.png'
import slider10 from '../assets/slider10.png'
const Slider = () => {
  return (
    <div className='sliderwraper flex  gap-6 flex-nowrap overflow-x-auto items-center justify-center ' >
        <div className="box h-[8vh] w-[25vh]  flex-shrink-0 ">
            <img className='h-full w-full object-contain  '  src={slider1} alt="" />
        </div>
        <div className="box h-[8vh] w-[25vh]  flex-shrink-0 ">
        <img className='h-full w-full object-contain  '  src={slider2} alt="" />

        </div>
        <div className="box h-[8vh] w-[25vh]  flex-shrink-0 ">
        <img className='h-full w-full object-contain  '  src={slider3} alt="" />

        </div>
        <div className="box h-[8vh] w-[25vh]  flex-shrink-0 ">
        <img className='h-full w-full object-contain  '  src={slider4} alt="" />

        </div>
        <div className="box h-[8vh] w-[25vh]  flex-shrink-0 ">
        <img className='h-full w-full object-contain  '  src={slider5} alt="" />

        </div>
        <div className="box h-[8vh] w-[25vh]  flex-shrink-0 ">
        <img className='h-full w-full object-contain  '  src={slider6} alt="" />

        </div>
        <div className="box h-[8vh] w-[25vh]  flex-shrink-0 ">
        <img className='h-full w-full object-contain  '  src={slider7} alt="" />

        </div>
        <div className="box h-[8vh] w-[25vh]  flex-shrink-0 ">
        <img className='h-full w-full object-contain  '  src={slider8} alt="" />

        </div>
        <div className="box h-[8vh] w-[25vh]  flex-shrink-0 ">
        <img className='h-full w-full object-contain  '  src={slider9} alt="" />

        </div>
        <div className="box h-[8vh] w-[25vh]  flex-shrink-0 ">
        <img className='h-full w-full object-contain  '  src={slider10} alt="" />

        </div>
    </div>
  )
}

export default Slider