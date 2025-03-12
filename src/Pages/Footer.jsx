import React from 'react'
import Logo from '../assets/Frame.png'
import LogoText from '../assets/Shadient.co.png'
import FooterLinks from '../components/FooterLinks'

const Footer = () => {
  const companyLinks = ['About us', 'Team', 'Careers']
  const servicesLinks = ['Branding', 'Web development', 'Digital marketing', 'Mobile app', 'SEO', 'User testing']
  const resourcesLinks = ['Blog', 'Case study', 'Testimonials']
  const followUsLinks = ['Instagram', 'Figma', 'Careers']

  return (
    <div className="min-h-[50vh] w-full flex flex-col items-center gap-10 justify-between pr-[4rem]">
      <div className="grid grid-cols-2 md:grid-cols-5  justify-center gap-2">
        <FooterLinks title="Company" links={companyLinks} />
        <FooterLinks title="Services" links={servicesLinks} />
        <FooterLinks title="Resources" links={resourcesLinks} />
        <FooterLinks title="Follow us" links={followUsLinks} />
        <div className="flex flex-col gap-3  mt-[4vh] md:mt-0 md:w-full w-[60vh] ">
          <div className="logo flex gap-2 justify-start items-center">
            <img src={Logo} alt="Logo" />
            <img src={LogoText} alt="LogoText" />
          </div>
          <p className="text-[14px] text-[#ffff]/60">Get latest updates</p>
          <div >
            <input type="email" placeholder="Your Email" className="w-full rounded-full px-2 py-3 bg-transparent border-[1px] border-[#ffff]/40" />
          </div>
        </div>
      </div>
      <div className="flex items-end justify-center h-[9vh]">
        <h1 className="text-[16px] text-[#ffff]/60 font-medium">Created by Shadient.co</h1>
      </div>
    </div>
  )
}

export default Footer