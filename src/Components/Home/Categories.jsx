
import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  const category = [
    {
      id: 1,
      image: "https://i.pinimg.com/736x/7b/e6/0a/7be60ae66c18fa1250b0cf1e8ffd1449.jpg",
      type: "Hoodies",
      href: "/shop/hoodies"
    },
    {
      id: 2,
      image: "https://i.pinimg.com/1200x/60/48/ae/6048ae695da2490ea6066cba4aa3471b.jpg",
      type: "Bottoms",
      href: "/shop/bottoms"
    },
    {
      id: 3,
      image: "https://i.pinimg.com/1200x/8b/3e/45/8b3e45446e540ca6d06633ea4b9faaf1.jpg",
      type: "Accessories",
      href: "/shop/accessories"
    },
    {
      id: 4,
      image: "https://i.pinimg.com/1200x/eb/39/c6/eb39c6371fef5e25917f93f7ee9a6b99.jpg",
      type: "Sweatshirts",
      href: "/shop/sweatshirts"
    },
    {
      id: 5,
      image: "https://i.pinimg.com/1200x/39/5a/6e/395a6e7640f3e3006e27350ad3a23f0c.jpg",
      type: "Tees",
      href: "/shop/tees"
    },
    {
      id: 6,
      image: "https://i.pinimg.com/1200x/08/ea/9c/08ea9cdc7d338754e321085450d218dd.jpg",
      type: "Outerwear",
      href: "/shop/outerwear"
    },
    {
      id: 7,
      image: "https://i.pinimg.com/736x/aa/1b/0d/aa1b0d51673ac077ec782a72cf4af24e.jpg",
      type: "Caps",
      href: "/shop/caps"
    }
  ]

  return (
    <div className="mt-25 w-full px-10">
      {/* Page heading */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] uppercase tracking-[0.28rem] text-[var(--color-orange)]">
          New Drop
        </span>

        <h1 className="text-4xl selection:bg-[var(--color-orange)] selection:text-[var(--color-bg)] sm:text-6xl lg:text-8xl">
          Fresh out the tunnel
        </h1>
      </div>

      {/* Category grid */}
      <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-5">
        {category.map((item) => (
          <Link
            key={item.id}
            to={item.href}
            aria-label={`Shop ${item.type}`}
            className="group relative aspect-3/4 overflow-hidden rounded-xl"
          >
            <img
              src={item.image}
              alt={item.type}
              className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            />

            <h2 className="absolute bottom-2 left-1/2 inline-flex -translate-x-1/2 text-center text-4xl text-white transition-colors duration-300 group-hover:text-[var(--color-orange)]">
              {item.type}
            </h2>

            <span className="absolute left-2 top-2 font-[var(--font-heading)] text-xl font-semibold text-white">
              {String(item.id).padStart(2, '0')}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Categories
