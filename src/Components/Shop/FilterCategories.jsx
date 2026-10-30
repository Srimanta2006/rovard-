
import React from 'react'
import { Link } from 'react-router-dom'

const FilterCategories = ({ selectedCategory }) => {
  const categories = [
    { name: 'All', href: '/shop', value: 'All' },
    { name: 'Hoodies', href: '/shop/hoodies', value: 'hoodies' },
    { name: 'T-Shirts', href: '/shop/tees', value: 'tees' },
    { name: 'Bottoms', href: '/shop/bottoms', value: 'bottoms' },
    { name: 'Sweatshirts', href: '/shop/sweatshirt', value: 'sweatshirt' },
    { name: 'Outerwear', href: '/shop/outwears', value: 'outwears' },
    { name: 'Accessories', href: '/shop/accessories', value: 'accessories' },
    { name: 'Caps', href: '/shop/caps', value: 'caps' },
  ]

  return (
    <div className="border-t border-b border-[var(--color-bronze)]/20 px-4 py-5">
      <div className="flex gap-8 px-6">
        {categories.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={`flex items-center justify-center border
              border-[var(--color-bronze)]/30 px-4 py-1.5
              display-heading text-xl tracking-widest cursor-pointer
              transition-all duration-200 whitespace-nowrap
              ${
                selectedCategory?.toLowerCase() === item.value
                  ? 'bg-[#F86111] text-white'
                  : 'hover:bg-[#F86111]'
              }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FilterCategories
