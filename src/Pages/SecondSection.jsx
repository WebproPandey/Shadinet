import React from 'react';
import Slider from '../components/Slider';
import slider1 from '../assets/slider1.png';
import slider2 from '../assets/slider2.png';
import slider3 from '../assets/slider3.png';
import slider4 from '../assets/slider4.png';
import slider5 from '../assets/slider5.png';
import slider6 from '../assets/slider6.png';
import slider7 from '../assets/slider7.png';
import slider8 from '../assets/slider8.png';
import slider9 from '../assets/slider9.png';
import slider10 from '../assets/slider10.png';

const firstSliderImages = [slider1, slider2, slider3, slider4, slider5, slider6, slider7, slider8, slider9];
const secondSliderImages = [slider6, slider7, slider8, slider9, slider10, slider2, slider3, slider4];

const SecondSection = () => {
  return (
    <div className="SecondSection h-full w-full px-4 py-10 flex flex-col justify-center gap-12">
      <div className="top w-full flex px-[10px]  md:px-[70px]">
        <div className="left w-1/2">
          <div className="text-[4vh] md:text-[40px] font-bold text-white leading-none">
            Trusted by 200+ companies around the world
          </div>
        </div>
        <div className="right w-1/2">
          <p className="text-[#ffffff]/60 text-[2vh] md:text-[16px]">
            Vulputate molestie molestie amet leo blandit accumsan. Sapien sed amet tellus purus sit odio eget.
            Diam morbi faucibus vitae neque id in. Nullam sed et dapibus nunc, porta enim orci urna, sit. Lectus ac.
          </p>
        </div>
      </div>
      <div className="bottom flex flex-col gap-10">
        <Slider images={firstSliderImages} initialReverse={false} />
        <Slider images={secondSliderImages} initialReverse={true} />
      </div>
    </div>
  );
};

export default SecondSection;
