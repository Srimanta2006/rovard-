import React from 'react'
import RovardBadge from '../Layout/RovardBadge'

const AboutContent = () => {
    const stats = [
        {
            number: 520,
            about: "gsm fleece"
        },
        {
            number: 600,
            about: "piece per run"
        },
        {
            number: 30,
            about: "day returns"
        }
    ]
    return (
        <div className='h-screen px-22 py-10 flex items-center justify-center gap-45'>
            <div className='h-[92vh] w-[40vw] border border-white/20 relative'>
                <img src="/public/assets/hero-BYGuOvTq.jpg" alt="aboutimg"
                    className='h-full w-full object-cover' />
                {/* <div className='border-2 h-100 w-100 rounded-full absolute -right-1 -bottom-2'> */}
                <RovardBadge  />
                {/* </div> */}
            </div>
            <div>
                <div className='flex flex-col gap-4 border-b border-white/20 pb-10'>
                    <span className='text-[var(--color-orange)] uppercase text-sm tracking-widest'>01 - origin</span>
                    <h1 className='text-[5vw] leading-[5vw]'>
                        Made for the hours <br /> nobody photographs
                    </h1>
                    <p className='text-white/50'>ROVARD is cut for night shifts, last trains and long walks home. Heavy fleece, washed twill and colours pulled from sodium street lamps.</p>
                </div>
                <div className='flex items-center justify-between pt-10'>
                    {stats.map((stat) => {
                        return (
                            <div className='flex flex-col gap-3 items-center'>
                                <h1 className='text-8xl text-[var(--color-orange)] '>{stat.number}</h1>
                                <p className='text-[8px] uppercase tracking-widest text-white/40'>{stat.about}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default AboutContent