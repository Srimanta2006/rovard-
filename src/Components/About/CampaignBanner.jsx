import React from 'react'
import { Link } from 'react-router-dom'

const CampaignBanner = () => {
  return (
    <div className='h-fit mt-15 px-12 mb-20 '>
        <div className='w-full h-[60vh] border border-white/10'>
            <img src="public\assets\campaign.jpg" className="h-full w-full object-cover " />
        </div>
        <div className='flex pb-40 gap-8 flex-col justify-center  items-center mt-12 '>
            <h1 className='text-[6vw]'>see the drop</h1>
            <Link to='/shop' className='uppercase text-[10px] bg-[var(--color-orange)] text-black px-16 py-6 rounded-sm hover:bg-amber-50'>shop now</Link>
        </div>
    </div>
  )
}

export default CampaignBanner