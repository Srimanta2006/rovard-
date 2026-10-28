import React, { useContext } from 'react'
import { FaStar } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { CartContext } from '../../Context/CartContextProvider';
import { WishlistContext } from '../../Context/WishlistContextProvider';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const { isWishlisted, toggleWishlist } = useContext(WishlistContext);
    const wishlisted = isWishlisted(product.id);
    return (
        <article className="group min-w-0 cursor-pointer">
            {/* Product Image */}
            <div className="relative h-[55vh]  overflow-hidden bg-[#171717]">
                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* New Drop Badge */}
                {product.isNew && (
                    <span className="absolute left-3 top-3 bg-[var(--color-orange)] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-black">
                        New Drop
                    </span>
                )}

                {/* Wishlist Button */}
                {/* Wishlist Button */}
                <button
                    type="button"
                    onClick={(event) => {
                        event.stopPropagation();
                        toggleWishlist(product);
                    }}
                    aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
                    className="absolute right-3 top-3 flex h-12 w-12 items-center
             justify-center rounded-full bg-black/40 backdrop-blur-sm border
             cursor-pointer transition-transform duration-300
             hover:scale-110 active:scale-95"
                >
                    <FiHeart
                        size={22}
                        className={`transition-colors duration-300
                                ${wishlisted
                                ? "fill-red-500 text-red-500"
                                : "fill-none text-white"
                            }`}
                    />
                </button>

                {/* Quick Add Button */}
                <button
                    type="button"
                    onClick={() => {
                        addToCart({ ...product })
                        console.log("product added to cart")
                    }}
                    className="absolute bottom-3 left-3 right-3 translate-y-3 bg-white px-3 py-3 text-[10px] font-semibold
                    uppercase tracking-[0.2em] text-black opacity-0 transition-all duration-300 hover:bg-[var(--color-orange)]
                     group-hover:translate-y-0 group-hover:opacity-100"
                >
                    Quick Add +
                </button>
            </div>

            {/* Product Information */}
            <div className="mt-4 space-y-2">
                <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                        <p className="mb-1 text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                            {product.brand}
                        </p>

                        <h1 className="text-md leading-snug tracking-widest text-[var(--color-text)] transition-colors duration-300 group-hover:text-[var(--color-orange)]">
                            {product.name}
                        </h1>
                    </div>

                    <p className="shrink-0 text-sm font-semibold text-[var(--color-text)]">
                        ${product.price}
                    </p>
                </div>

                {/* Colors */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                    {product.colors?.map((color) => (
                        <span
                            key={color}
                            title={color}
                            className="border border-neutral-300/40 px-2 py-1 text-[9px] text-neutral-500"
                        >
                            {color}
                        </span>
                    ))}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 text-[11px] text-neutral-500">
                    <FaStar className="text-[var(--color-orange)]" size={10} />
                    <span>{product.rating}</span>
                    {product.bestseller && (
                        <span className="ml-2 border-l border-neutral-300/40 pl-2 uppercase tracking-wider">
                            Bestseller
                        </span>
                    )}
                </div>
            </div>
        </article>
    )
}

export default ProductCard