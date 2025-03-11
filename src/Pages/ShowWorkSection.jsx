import React from 'react'
import WorkCard1 from '../components/WorkCard1'
import WorkCard2 from '../components/WorkCard2'

const combinedData = [
  { type: 'WorkCard1', bgColor: '#8474C4', category: 'Website', title: 'Creative landing page' },
  { type: 'WorkCard2', category: ' Branding', title: 'Creative Branding' },
  { type: 'WorkCard2', category: 'DEVELOPMENT', title: 'Automation. Advanced Level' },

]
const combinedData2 = [
    { type: 'WorkCard2', category: 'Digital marketing', title: 'Why We Collect User’s Data' },
    { type: 'WorkCard1', bgColor: '#8474C4', category: 'User testing', title: 'Creative landing page' },
    { type: 'WorkCard2', bgColor: '#8474C4', category: 'SEO', title: 'How We Optimized Our SEO' }
  ]

const ShowWorkSection = () => {
  return (
    <div className='h-full w-full flex gap-5'>
      <div className="left flex flex-col gap-4 w-[35%]">
        <h1 className='text-[40px] text-white leading-[3rem]'>Some pieces of our work</h1>
        <p className='text-[#ffff]/60 text-[16px]'>
          Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt.
          Show More
        </p>
        <button className='py-2 w-[40%] border-[#FFA800] border-[1px] rounded-full text-[#FFA800] uppercase'>some more</button>
      </div>
      <div className="mid   flex flex-col gap-4">
        {combinedData.map((data, index) => (
          data.type === 'WorkCard1' ? (
            <WorkCard1 key={index} bgColor={data.bgColor} category={data.category} title={data.title} />
          ) : (
            <WorkCard2 key={index} category={data.category} title={data.title} />
          )
        ))}
      </div>
    <div className="right   flex flex-col gap-4">
        {combinedData2.map((data, index) => (
          data.type === 'WorkCard1' ? (
            <WorkCard1 key={index} bgColor={data.bgColor} category={data.category} title={data.title} />
          ) : (
            <WorkCard2 key={index} category={data.category} title={data.title} />
          )
        ))}
        
      </div>
    </div>
  )
}

export default ShowWorkSection