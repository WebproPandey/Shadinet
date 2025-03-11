import React, { useEffect, useRef } from "react";
import homeimg from "../assets/homeBackgorund.png";
import morf1 from "../assets/morf1.png";
import morf2 from "../assets/morf2.png";
import { gsap } from "gsap";

const AboutContainer = () => {
  const headingRefs = useRef([]);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    headingRefs.current.forEach((heading, index) => {
      if (!heading) return;

      const chars = heading.querySelectorAll("span");

      gsap.set(chars, { opacity: 0, y: 100 });

      gsap.to(chars, {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        ease: "power3.out",
        delay: index * 0.3,
      });
    });

    gsap.from(paragraphRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      delay: 1.2,
      ease: "power3.out",
    });

    gsap.from(buttonRef.current, {
      y: 30,
      opacity: 0,
      delay: 1.5,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const wrapText = (text) =>
    text.split("").map((char, i) => (
      <span key={i} className="inline-block">
        {char}
      </span>
    ));

  return (
    <div className="Aboutmain h-screen w-full relative px-[70px]">
      <div className="h-full w-full absolute top-0 left-0 pt-[15vh]">
        <img src={homeimg} className="h-full w-full object-cover z-[-1]" alt="" />
      </div>
      <div className="morf1 absolute bottom-0 left-0">
        <img src={morf2} className="" alt="" />
      </div>
      <div className="heading h-full w-full flex justify-start items-center relative z-[9999]">
        <div className="headingwraper text-white w-[40%] flex flex-col items-start gap-3">
          <div className="mainheading leading-[5rem] tracking-tighter">
            <div className="overflow-hidden">

            <div ref={(el) => (headingRefs.current[0] = el)} className="text-[24px] text-[#FA7C0B] font-semibold">
              {wrapText("About Us")}
            </div>
            </div>
            
            <div ref={(el) => (headingRefs.current[1] = el)} className="text-[64px] overflow-hidden">
              {wrapText("Shadient.co")}
            </div>
          </div>
          <p ref={paragraphRef} className="text-[#ffffff]/60 leading-[1.5rem] overflow-hidden">
            Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros
            Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros
          </p>
          <div className="Emailwraper flex w-[80%] gap-2">
            <button ref={buttonRef} className="px-6 py-2 rounded-full bg-[#FFA800] text-black font-medium">
              Contact
            </button>
          </div>
        </div>
      </div>
      <div className="morf2 absolute top-0 right-0">
        <img src={morf1} className="" alt="" />
      </div>
    </div>
  );
};

export default AboutContainer;
