import React from "react";
import Logo from "../assets/Frame.png";
import LogoText from "../assets/Shadient.co.png";

const Footer = () => {
  return (
    <div className="min-h-[50vh]  w-full flex flex-col  gap-10 justify-between  pr-[4rem]">
      <div className="grid grid-cols-5">
        <div>
          <div className="text-[16px] font-medium text-white">Company</div>
          <div className="mt-5 flex flex-col  gap-3">
            <h1 className="text-[16px] text-[#ffff]/60 font-normal">
              About us
            </h1>
            <h1 className="text-[16px] text-[#ffff]/60 font-normal">Team</h1>
            <h1 className="text-[16px] text-[#ffff]/60 font-normal">Careers</h1>
          </div>
        </div>
        <div>
          <div className="text-[16px] font-medium text-white">Services</div>
          <div className="mt-5 flex flex-col  gap-3">
            <h1 className="text-[16px] text-[#ffff]/60 font-normal">
              Branding
            </h1>
            <h1 className="text-[16px] text-[#ffff]/60 font-normal">
              Web development
            </h1>
            <h1 className="text-[16px] text-[#ffff]/60 font-normal">
              Digital marketing
            </h1>
            <h1 className="text-[16px] text-[#ffff]/60 font-normal">
              Digital marketing
            </h1>
            <h1 className="text-[16px] text-[#ffff]/60 font-normal">
              Mobile app
            </h1>
            <h1 className="text-[16px] text-[#ffff]/60 font-normal">SEO</h1>
            <h1 className="text-[16px] text-[#ffff]/60 font-normal">
              User testing
            </h1>
          </div>
        </div>
        <div>
          <div className="text-[16px] font-medium text-white">Resources</div>
          <div className="mt-5 flex flex-col  gap-3">
            <h1 className="text-[16px] text-[#ffff]/60 font-normal">Blog</h1>
            <h1 className="text-[16px] text-[#ffff]/60 font-normal">
              Case study
            </h1>
            <h1 className="text-[16px] text-[#ffff]/60 font-normal">
              Testimonials
            </h1>
          </div>
        </div>
        <div>
          <div className="text-[16px] font-medium text-white">Follow us</div>
          <div className="mt-5 flex flex-col  gap-3">
            <h1 className="text-[16px] text-[#ffff]/60 font-normal">
              Instagram
            </h1>
            <h1 className="text-[16px] text-[#ffff]/60 font-normal">Figma</h1>
            <h1 className="text-[16px] text-[#ffff]/60 font-normal">Careers</h1>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="logo flex  gap-2 justify-start  items-center">
            <img src={Logo} alt="" />
            <img src={LogoText} alt="" />
          </div>
          <p className="text-[14px] text-[#ffff]/60">Get latest updates</p>
          <div>
            <input type="Email" placeholder="Your Email" className=" w-full  rounded-full  px-2  py-3 bg-transparent border-[1px] border-[#ffff]/40" />
          </div>
        </div>
      </div>
      <div className="flex items-end  justify-center h-[9vh]">
        <h1 className="text-[16px] text-[#ffff]/60 font-medium">Created by Shadient.co</h1>
      </div>
    </div>
  );
};

export default Footer;
