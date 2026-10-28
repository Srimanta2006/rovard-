import React from 'react'

const FilterCategories = ({ selectedCategory, setSelectedCategory }) => {
    const categories = [
        'All',
        'hoodies',
        'tees',
        'Sweatshirts',
        'bottoms',
        'accessories',
        'outerwear'
    ]
    return (
        <div className='border-t border-b border-[var(--color-bronze)]/20 px-4 py-5'>
            <div className='flex gap-8 px-6'>
                {categories.map((item) => {
                    return (
                        <button
                            type='button'
                            onClick={() => setSelectedCategory(item)}
                            className={`flex items-center justify-center border
                                        border-[var(--color-bronze)]/30 px-4 py-1.5
                                        display-heading text-xl tracking-widest cursor-pointer
                                        transition-all duration-200 whitespace-nowrap
                                        ${selectedCategory === item
                                            ? 'bg-[#F86111] text-white'
                                            : 'hover:bg-[#F86111]'
                                        }`}
                                >
                                    {item}
                            </button>
                    )
                })}
            </div>
        </div>
    )
}

export default FilterCategories