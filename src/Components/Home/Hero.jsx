import React from "react";
import HeroImg from "../../assets/Image/HeroImg.jpg";
import { GoArrowUpRight } from "react-icons/go";


const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[var(--color-bg)]">

      {/* Person / Clothing Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={HeroImg}
          alt="Model wearing Rovard clothing"
          className="h-full w-full object-contain object-center"
        />
      </div>

      {/* Brand Typography */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-[22rem] z-20 flex items-start justify-start overflow-hidden
          [text-shadow:12px_12px_13px_rgba(0,0,0,0.5)]
          [mix-blend-mode:screen]">
        <h1 className="hero-heading whitespace-nowrap text-[18vw] text-[var(--color-text)]">
          ROVARD ROVARD
        </h1>
      </div>
      {/* Second layer: foreground typography */}
      <div className="pointer-events-none absolute items-start justify-start inset-x-0 top-28 z-20 overflow-hidden">
        <h1 className="hero-heading  whitespace-nowrap text-[18vw]
          text-[var(--color-orange)] text-transparent [text-stroke:0.5px_var(--color-bronze)] [-webkit-text-stroke:0.2px_var(--color-bronze)] ">
          ROVARD ROVARD
        </h1>
      </div>

      <div className="text-white absolute bottom-18 left-0 right-0 px-10
            flex items-center justify-between ">
        <div className="text-8xl ">
          <h1>Built for</h1>
          <div className="relative px-4 py-2">
            <h1 className="pl-3">after dark</h1>
          <svg className="absolute inset-0 w-full h-full pointer-events-none scale-110"
            viewBox="0 0 100 100 " preserveAspectRatio="none">
              <path
                d="M 5, 50
                  C 5, 10, 95,5,95,45
                  C 95,85,10,95,8,55
                  C 7,35,45,25,85,35 "
                fill="none"
                stroke="#F56213"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
          </svg>
          </div>
        </div>
        <div>
          <p className="text-[#4D4946] text-right text-lg">520gsm fleece, garment-dyed in ember. <br />Limited run  of 600 pieces.</p>
          <button className="flex items-center justify-center mt-4 gap-5 bg-[var(--color-orange)] text-black
                            px-8 py-6 pr-18 text-sm tracking-widest uppercase hover:bg-[var(--color-hover)]  cursor-pointer " >
            shop the drop <GoArrowUpRight />
          </button>
        </div>
      </div>

    </section>
  );
};

export default Hero;