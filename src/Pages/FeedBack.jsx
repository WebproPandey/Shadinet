import React from 'react'
import FeedBackCard from '../components/FeedBackCard'

const FeedBack = () => {
  return (
    <div className='h-full  w-full'>
        <div className='top flex justify-between  items-end'>
            <h1 className='text-[16px] text-[#ffff]/60'>Hear what our customers say :-</h1>
            <div className="button flex   gap-3" >
                <button className='p-3 border-[1px] border-[#FFA800]'>
                <i className="ri-arrow-drop-left-line text-[#FFA800]"></i>
                </button>
                <button className='p-3 border-[1px] border-[#FFA800]'>
                <i className="ri-arrow-drop-right-line text-[#FFA800]"></i>
                </button>
            </div>
        </div>
        <div className="bottom mt-[5rem]">
            <FeedBackCard/>
        </div>

    </div>
  )
}

export default FeedBack