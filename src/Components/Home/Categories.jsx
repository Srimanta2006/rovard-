import React from 'react'

const Categories = () => {
  const category = [
    {
      id: 1,
      image: "https://i.pinimg.com/736x/7b/e6/0a/7be60ae66c18fa1250b0cf1e8ffd1449.jpg",
      type: "Hoodies"
    },
    {
      id: 2,
      image: "https://i.pinimg.com/1200x/60/48/ae/6048ae695da2490ea6066cba4aa3471b.jpg",
      type: "Bottoms"
    },
    {
      id: 3,
      image: "https://i.pinimg.com/1200x/8b/3e/45/8b3e45446e540ca6d06633ea4b9faaf1.jpg",
      type: "Accessories"
    },
    {
      id: 4,
      image: "https://i.pinimg.com/1200x/eb/39/c6/eb39c6371fef5e25917f93f7ee9a6b99.jpg",
      type: "sweatshirt"
    }
    , {
      id: 5,
      image: "https://i.pinimg.com/1200x/39/5a/6e/395a6e7640f3e3006e27350ad3a23f0c.jpg",
      type: "tee"
    },
    {
      id: 6,
      image: "https://i.pinimg.com/1200x/08/ea/9c/08ea9cdc7d338754e321085450d218dd.jpg",
      type: "outwear"
    },
    {
      id: 7,
      image: "https://i.pinimg.com/736x/aa/1b/0d/aa1b0d51673ac077ec782a72cf4af24e.jpg",
      type: "caps"
    }
  ]
  return (
    <div className='w-full mt-25 px-10'>
      {/* page heading */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] uppercase tracking-[0.28rem] text-[var(--color-orange)]">
          New Drop
        </span>

        <h1 className="text-4xl selection:bg-[var(--color-orange)] selection:text-[var(--color-bg)] sm:text-6xl lg:text-8xl">
          Fresh out the tunnel
        </h1>
      </div>

      {/* category grid */}
      <div className='mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-5'>
        {category.map((item) => {
          return (
            <article className='group aspect-3/4 relative overflow-hidden rounded-xl'>
              <img src={item.image} alt={item.type}
                className='h-full w-full object-cover transition-all duration-300 ease-out group-hover:scale-105'
              />
              <h1 className="absolute bottom-2 left-1/2 -translate-x-1/2 inline-flex text-4xl text-[var(--color-black)] transition-all duration-300 group-hover:text-[var(--color-orange)]">
                {item.type}
              </h1>
              <span className='absolute top-2 left-2 text-black font-[var(--font-heading)] font-semibold text-xl'>0{item.id}</span>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Categories