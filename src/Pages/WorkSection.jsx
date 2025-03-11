import React from 'react'
import Card from '../components/Card'

const WorkSection = () => {
  return (
    <div className='h-full  w-[80%]  gap-3 flex  justify-center items-center flex-col '>
       <h1 className='text-[40px] text-white text-center'>We offer</h1>
       <div className='w-[60%] flex justify-center items-start '>
       <p className='text-[16px] text-[#ffff]/60 text-center'> Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt. </p>
       </div>
       <div className='w-full mt-8'>
        <Card/>
       </div>
    </div>
  )
}

export default WorkSection