import React, { useEffect, useState } from 'react'
import { products } from '../../Data/Products'
import ProductCard from '../Product/ProductCard'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

const normalizeCategory = (value = '') => {
  const category = value.toLowerCase().trim()

  const aliases = {
    hoodie: 'hoodies',
    hoodies: 'hoodies',
    tee: 'tees',
    tees: 'tees',
    sweatshirt: 'sweatshirts',
    sweatshirts: 'sweatshirts',
    bottom: 'bottoms',
    bottoms: 'bottoms',
    accessory: 'accessories',
    accessories: 'accessories',
    outwear: 'outerwear',
    outwears: 'outerwear',
    outerwear: 'outerwear',
  }

  return aliases[category] || category
}

const PRODUCT_PER_PAGE = 16

const ShopGrid = ({ selectedCategory = 'All' }) => {
  const [currentPage, setCurrentPage] = useState(1)

  // Filter products by category
  const filteredProducts =
    !selectedCategory ||
    selectedCategory.toLowerCase().trim() === 'all'
      ? products
      : products.filter((product) => {
          const productCategory = product.category || product.type

          return (
            normalizeCategory(productCategory) ===
            normalizeCategory(selectedCategory)
          )
        })

  // Calculate pagination using filtered products
  const totalPage = Math.ceil(
    filteredProducts.length / PRODUCT_PER_PAGE
  )

  const startIndex = (currentPage - 1) * PRODUCT_PER_PAGE
  const endIndex = startIndex + PRODUCT_PER_PAGE

  const currentProducts = filteredProducts.slice(
    startIndex,
    endIndex
  )

  // Reset to the first page when category changes
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory])

  // Change page and scroll to top
  const changePage = (page) => {
    setCurrentPage(page)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <section className="flex flex-col mb-20">
      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 px-4 py-10 sm:gap-x-6 sm:px-6 lg:grid-cols-4 lg:px-10">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <p className="col-span-full py-10 text-center text-gray-500">
            No products found in this category.
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPage > 1 && (
        <div className="mb-10 flex items-center justify-center mt-15 gap-3 sm:gap-8">
          {/* Previous Button */}
          <button
            type="button"
            aria-label="Previous page"
            disabled={currentPage === 1}
            onClick={() =>
              changePage(Math.max(currentPage - 1, 1))
            }
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-300 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 sm:h-12 sm:w-12"
          >
            <IoIosArrowBack size={18} />
          </button>

          {/* Page Numbers */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            {Array.from(
              { length: totalPage },
              (_, index) => index + 1
            ).map((page) => (
              <button
                type="button"
                key={page}
                aria-label={`Go to page ${page}`}
                aria-current={
                  currentPage === page ? 'page' : undefined
                }
                onClick={() => changePage(page)}
                className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border text-sm transition sm:h-12 sm:w-12 ${
                  currentPage === page
                    ? 'border-[var(--color-orange)] bg-[var(--color-orange)] text-white'
                    : 'border-gray-300 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            type="button"
            aria-label="Next page"
            disabled={currentPage === totalPage}
            onClick={() =>
              changePage(
                Math.min(currentPage + 1, totalPage)
              )
            }
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-300 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 sm:h-12 sm:w-12"
          >
            <IoIosArrowForward size={18} />
          </button>
        </div>
      )}
    </section>
  )
}

export default ShopGrid