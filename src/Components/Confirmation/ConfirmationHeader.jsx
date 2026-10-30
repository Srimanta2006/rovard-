import React from 'react'

const ConfirmationHeader = () => {
  return (
    <div className="px-6 py-2 flex flex-col items-center w-full ">

      <div className="relative inline-block">

        <h1 className="relative z-10 px-3 text-[10vw] md:text-[6vw] font-['Anton'] uppercase leading-none text-[#F5F3EF]">
          it's yours
        </h1>

        <svg
          className="absolute -left-[2%] -top-[8%] z-20 h-[116%] w-[105%] pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M 5, 50
              C 5, 10, 95,5,95,45
              C 95,85,10,95,8,55
              C 7,35,45,25,85,35"
            fill="none"
            stroke="#F56213"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

      </div>
      <p className="mt-8 max-w-5xl text-sm leading-8 text-[#A5A5A5] md:text-[15px]">
        Thanks Srimanta. A (simulated) confirmation went to
        srimanta2006@gmail.com. Shipping to
        asdfas/jdasdkjfhal;siuuoiwejsdnfalskf, bhubaneswar 754037.
      </p>
    </div>
  )
}

export default ConfirmationHeader