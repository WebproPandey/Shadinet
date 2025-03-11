import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Slider = ({ images, initialReverse }) => {
  const sliderRef = useRef(null);
  const [isReversed, setIsReversed] = useState(initialReverse);
  const lastScrollY = useRef(window.scrollY);
  const scrollTimeout = useRef(null); 

  useEffect(() => {
    const slider = sliderRef.current;
    const duration = 20;

    const animateSlider = () => {
      gsap.killTweensOf(slider); 
      gsap.to(slider, {
        x: isReversed ? "-100%" : "100%",
        ease: "none",
        duration: duration,
        repeat: -1,
      });
    };

    animateSlider();

    const handleScroll = () => {
      clearTimeout(scrollTimeout.current); 

      scrollTimeout.current = setTimeout(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY.current) {
          setIsReversed((prev) => !prev);
        } else if (currentScrollY < lastScrollY.current) {
          setIsReversed((prev) => !prev); 
        }

        lastScrollY.current = currentScrollY;
      }, 150); 
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      gsap.killTweensOf(slider);
      clearTimeout(scrollTimeout.current); 
    };
  }, [isReversed]);

  return (
    <div className="sliderwraper overflow-hidden">
      <div ref={sliderRef} className="flex gap-6 flex-nowrap items-center justify-center">
        {images.map((image, index) => (
          <div key={index} className="box h-[8vh] w-[25vh] flex-shrink-0">
            <img className="h-full w-full object-contain" src={image} alt={`slider-${index}`} />
          </div>
        ))}
        {images.map((image, index) => (
          <div key={index + images.length} className="box h-[8vh] w-[25vh] flex-shrink-0">
            <img className="h-full w-full object-contain" src={image} alt={`slider-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
