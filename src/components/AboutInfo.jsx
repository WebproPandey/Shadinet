import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AboutInfo = () => {
  const headings = useRef([]);
  const paragraphs = useRef([]);

  useEffect(() => {
    headings.current.forEach((el, index) => {
      gsap.from(el, {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: index * 0.2,
        ease: 'power3.out'
      });
    });
    
    paragraphs.current.forEach((para, index) => {
      const words = para.innerText.split(" ");
      para.innerHTML = words.map(word => `<span style='display: inline-block; opacity: 0;'>${word} </span>`).join(" ");
      
      gsap.to(para.children, {
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        ease: "power3.out",
        delay: 0.5 + index * 0.2
      });
    });
  }, []);
  
  return (
    <div className='min-h-screen w-full bg-[#0f0f0f] flex flex-col gap-6 px-[20px] md:px-[70px] py-[4rem]'>
      <div className='w-full md:w-[80%]'>
        <h1 ref={el => headings.current[0] = el} className='text-white text-[32px] font-semibold'>Company</h1>
        <p ref={el => paragraphs.current[0] = el} className='text-[#ffff]/60 text-[16px] leading-[24px] mt-[2rem]'>
        Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.
        </p>
      </div>
      <div className='w-full md:w-[80%]'>
        <h1 ref={el => headings.current[1] = el} className='text-white text-[32px] font-semibold'>Team</h1>
        <p ref={el => paragraphs.current[1] = el} className='text-[#ffff]/60 text-[16px] leading-[24px] mt-[2rem]'>
        Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.
        </p>
      </div>
    </div>
  );
};

export default AboutInfo;
