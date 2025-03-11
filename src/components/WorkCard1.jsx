import React from 'react'

const WorkCard1 = ({ bgColor, category, title }) => {
  return (
    <div className='w-full border-[1px] flex flex-col gap-2 p-4'>
      <div className="h-[20vh] rounded-md" style={{ backgroundColor: bgColor }}></div>
      <div className='font-medium w-fit px-3 py-[2px] rounded-md bg-[#FFA800]'>{category}</div>
      <h1 className='text-[24px] text-white capitalize font-semibold'>{title}</h1>
      <div className='text-[16px] text-[#ffff]/60'>Read more
        <i className="ri-add-circle-line text-[#ffff]/60 text-[.8rem] ml-1"></i>
      </div>
    </div>
  )
}

export default WorkCard1