import React from 'react'
import user1 from "../assets/user1.png"
import user2 from "../assets/user2.png"
import user3 from "../assets/user3.png"
import user4 from "../assets/user4.png"

const feedbackData = [
  {
    img: user1,
    name: 'Brooklyn Simmons',
    role: 'Manager',
    feedback: 'Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci.'
  },
  {
    img: user2,
    name: 'Jane Cooper',
    role: 'Developer',
    feedback: 'Vitae tellus bibendum nibh integer auctor pretium sed. Sollicitudin tristique euismod elit.'
  },
  {
    img: user3,
    name: 'Robert Fox',
    role: 'Designer',
    feedback: 'Eu eu eget lorem commodo sagittis enim in viverra. Urna egestas ipsum gravida tempor. Libero, consectetur urna in enim magnis. Est.'
  },
  {
    img: user4,
    name: 'Kristin Watson',
    role: 'Product Manager',
    feedback: 'Amet aliquam, volutpat nisl, duis sed at. Vehicula proin consectetur risus dictumst nec amet consequat at tempus. Ornare dapibus nunc fames nibh morbi viverra eu sed mattis. '
  }
]

const FeedBackCard = () => {
  return (
    <div className='feedback-container grid  grid-cols-4 gap-4'>
      {feedbackData.map((feedback, index) => (
        <div key={index} className='feedback-card border-[1px] rounded-md h-fit p-2'>
          <div className='flex justify-start items-center'>
            <img src={feedback.img} alt={feedback.name} />
            <div className='ml-4'>
              <h1 className='text-white'>{feedback.name}</h1>
              <h2 className='text-[#ffff]/60'>{feedback.role}</h2>
            </div>
          </div>
          <div className='mt-4'>
            <p className='text-[#ffff]/60'>{feedback.feedback}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeedBackCard