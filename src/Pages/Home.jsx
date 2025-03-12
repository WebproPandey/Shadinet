import React, { useEffect, useRef } from "react";
import homeimg from "../assets/homeBackgorund.png";
import morf1 from "../assets/morf1.png";
import morf2 from "../assets/morf2.png";
import SecondSection from "./SecondSection";
import WorkSection from "./WorkSection";
import ChooseUsSection from "./ChooseUsSection";
import ShowWorkSection from "./ShowWorkSection";
import FeedBack from "./FeedBack";
import Contact from "./Contact";
import { gsap } from "gsap";

const Home = () => {
  const headingRefs = useRef([]);
  const paragraphRef = useRef(null);
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    headingRefs.current.forEach((heading, index) => {
      const letters = heading.innerText.split("").map((char, i) => (
        `<span style="display: inline-block; opacity: 0; transform: translateY(100px)" key=${i}>${char}</span>`
      )).join("");

      heading.innerHTML = letters;

      gsap.to(heading.children, {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        ease: "power3.out",
        delay: index * 0.3 
      });
    });

    gsap.from(paragraphRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      delay: 1.2,
      ease: "power3.out"
    });

    gsap.from(inputRef.current, {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      delay: 1.5,
      duration: 1,
      ease: "power3.out"
    });
    gsap.from(buttonRef.current, {
      opacity: 0,
      stagger: 0.2,
      delay: 2,
      duration: 1,
      ease: "power3.out"
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="HeroContainer w-full md:w-full relative">
      <div className="heromain h-screen w-full relative">
        <div className="h-full  w-full absolute top-0 left-0 pt-[15vh]">
          <img src={homeimg} className="h-full w-full object-cover z-[-1]" alt="" />
        </div>
        <div className="morf1 absolute bottom-0 left-0">
          <img src={morf2} className="h-1/2 w-1/2 md:h-full  md:w-full" alt="" />
        </div>
        <div className="heading h-full w-full flex justify-center items-center px-[20px]">
          <div className="headingwraper text-white w-full md:w-[35%] flex flex-col items-start gap-3">
            <div className="mainheading leading-[3rem] md:leading-[6rem] tracking-tighter text-[10vh]  md:text-[96px] font-semibold">
              <div ref={(el) => (headingRefs.current[0] = el)} className="overflow-hidden " >Attract</div>
              <div  className="Gradinettext bg-gradient-to-r from-[#FA7C0B] to-[#9DE8EE]  bg-clip-text overflow-hidden">
                <h1  ref={(el) => (headingRefs.current[1] = el)}>
                NewLeads
                </h1>
              </div>
              <div ref={(el) => (headingRefs.current[2] = el)} className="overflow-hidden">like never</div>
              <div ref={(el) => (headingRefs.current[3] = el)} className="overflow-hidden">before</div>
            </div>

            <p ref={paragraphRef} className="text-[#ffffff]/60 leading-[1rem] md:leading-[1.5rem] text-sm  md:text-base overflow-hidden">
              Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros
            </p>

            <div className="Emailwraper flex w-[90%] md:w-[80%] gap-2 ">
              <input ref={inputRef} type="email" placeholder="Email" className="w-full rounded-full outline-none border px-2 bg-transparent" />
              <button ref={buttonRef}  className="px-6 text-sm md:text-base md:px-6 py-1 md:py-2 rounded-full bg-[#FFA800] text-black font-medium 
             hover:scale-90 transition-transform duration-200 ease-linear">Attract</button>
            </div>
          </div>
        </div>
        <div className="morf2 absolute top-0 right-0">
          <img src={morf1} className="md:w-full   " alt="" />
        </div>
      </div>

      <div className="h-[70vh] w-full"><SecondSection /></div>
      <div className="min-h-screen w-full flex justify-center items-center px-[10px] py-[2rem] md:p-10 bg-[#110F0F]"><WorkSection /></div>
      <div className="h-[80vh] w-full pr-[20px]  md:px-[0%]"><ChooseUsSection /></div>
      <div className="min-h-screen w-full bg-[#110F0F] px-[70px] py-[5rem]"><ShowWorkSection /></div>
      <div className="min-h-screen md:h-[80vh] w-full px-[20px] md:px-[70px]  py-[5rem]"><FeedBack /></div>
      <div className="h-[85vh] w-full bg-[#110f0f] py-[5rem] px-[20px] md:px-[70px] relative">
        <Contact />
        <button onClick={scrollToTop} className="border-[1px] hover:bg-[#ffb219] hover:scale-90 hover:text-[#000] transition-all  duration-75  ease-linear border-[#FFB219] px-6 md:py-2 py-1 rounded-full uppercase text-[#FFB219] absolute bottom-4 right-14">
          Go to Top
        </button>
      </div>
    </div>
  );
};

export default Home;