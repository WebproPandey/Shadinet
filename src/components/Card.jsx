import React from 'react'
import markt from '../assets/marktinglogo.png'
import web from '../assets/developlogo.png'
import branding from '../assets/brandinglogo.png'

const cardData = [
  {
    img: branding,
    title: 'branding',
    description: 'Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices'
  },
  {
    img: markt,
    title: 'marketing',
    description: 'Integer ante non nunc, eget est justo vel semper nunc. Lacus '
  },
  {
    img: web,
    title: 'web development',
    description: 'Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.'
  },
  {
    img: web,
    title: 'web development',
    description: 'Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.'
  },
  {
    img: web,
    title: 'web development',
    description: 'Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.'
  },
  {
    img: web,
    title: 'web development',
    description: 'Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.'
  }
]

const Card = () => {
  return (
    <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6'>
      {cardData.map((card, index) => (
        <div key={index} className='card border py-4 px-4 flex flex-col gap-3 mb-2 hover:scale-105 transition-transform duration-300'>
          <div className="logo">
            <img src={card.img} alt={card.title} />
          </div>
          <h1 className='text-white text-[28px] capitalize'>{card.title}</h1>
          <p className='text-[#ffff]/60 text-[14px]'>{card.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Card