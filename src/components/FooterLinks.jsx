import React from 'react'

const FooterLinks = ({ title, links }) => {
  return (
    <div>
      <div className="text-[5vh] md:text-[16px] font-medium text-white">{title}</div>
      <div className="mt-5 flex flex-col gap-3">
        {links.map((link, index) => (
          <h1 key={index} className="text-[16px] text-[#ffff]/60 font-normal footer-link w-fit">{link}</h1>
        ))}
      </div>
    </div>
  )
}

export default FooterLinks