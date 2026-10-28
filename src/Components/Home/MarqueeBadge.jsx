import React from 'react'
import { IoStar } from "react-icons/io5";


const MarqueeBadge = () => {
    const text =["Heavy weight only", "limited runs", "free shipping over $150", "code ROVARD10 — 10% off",
        "Heavy weight only", "limited runs", "free shipping over $150", "code ROVARD10 — 10% off",
        "Heavy weight only", "limited runs", "free shipping over $150", "code ROVARD10 — 10% off",
        "Heavy weight only", "limited runs", "free shipping over $150", "code ROVARD10 — 10% off"]
  return (
    <div className='w-full bg-transparent text-white border-2 overflow-hidden select-none'>
        <div className='flex w-max min-w-full items-center gap-15 animate-marquee whitespace-nowrap py-5 font-extralight tracking-widest'>
            {text.map((item, idx)=>{
                return(
                    <div key={idx} className='flex items-center gap-15' >
                        <h1 className='text-4xl'>{item}</h1>
                        <span className=''><IoStar size={25} /></span>
                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default MarqueeBadge