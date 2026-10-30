import React, { useContext, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { products } from '../../Data/Products'
import { WishlistContext } from '../../Context/WishlistContextProvider'
import { FiHeart } from 'react-icons/fi'
const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("M");
    const { wishlist, isWishlisted, toggleWishlist } = useContext(WishlistContext);



    // find product that the user clicked
    const product = products.find((item) =>
        String(item.id) === String(id)
    )
    if (!product) {
        return (
            <div className="min-h-screen bg-[#050403] text-white flex flex-col items-center justify-center gap-4">
                <h1 className="text-3xl font-bold">Product Not Found</h1>
                <Link
                    to="/shop"
                    className="text-[#F15A0A] underline"
                >
                    Back to Shop
                </Link>
            </div>
        )
    }
    const wishlisted = isWishlisted(product.id);
    const price = Number(product.price) || 0;
    return (
        <section className="min-h-screen text-[#F5F3EF] pt-15 pb-12">
            <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-8 border border-neutral-900 py-5  md:px-8 lg:grid-cols-2 lg:gap-12">
                {/* left side image */}
                <div
                    className="relative h-[450px] overflow-hidden border border-white/10
                                sm:h-[600px] lg:sticky lg:top-24 lg:h-[calc(100vh-120px)]"
                >
                    {product.isNew && (
                        <span className="absolute z-50 left-5 top-5 bg-[var(--color-orange)] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-black">
                            New Drop
                        </span>
                    )}
                    <img src={product.image} alt={product.name} className=" h-full w-full object-cover " />
                </div>
                {/* right side product information */}
                <div className='relative flex flex-col py-4 lg:py-12'>
                    {/* cross button */}
                    <button
                        onClick={()=> navigate(-1)}
                        className='absolute top-4 right-5 cursor-pointer text-2xl '
                    >
                        ✕
                    </button>
                    {/* product category */}
                    <p
                        className='text-[10px] text-[var(--color-orange)] uppercase tracking-[0.3em]'
                    >
                        {product.category}
                    </p>

                    {/* product name */}
                    <h1 className='text-[8rem] leading-[8rem]'>
                        {product.name}
                    </h1>

                    {/* product price & rating */}
                    <div className='mt-2 flex items-center justify-between gap-4 pr-17'>
                        <p className="text-5xl font-medium ">
                            ${price.toFixed(2)}
                        </p>

                        <p className="flex items-center gap-1 text-2xl">
                            <span className="text-[#F15A0A]">★</span>
                            {product.rating || "4.9"}
                        </p>
                    </div>

                    {/* product description */}
                    <p className='text-white/80 mt-8 text-xl'>
                        {product.description ||
                            "Built for everyday wear. Premium materials, a modern silhouette, and a comfortable fit designed to stand out."}
                    </p>

                    {/* color selected */}
                    <div className='mt-8'>
                        <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-white/60">
                            Color-{" "}
                            <span className='font-bold text-white'>{selectedColor || product.colors[0]}</span>
                        </p>
                        <div className='mt-5 flex flex-wrap gap-4'>
                            {product.colors.map((color) => {
                                return (
                                    <button
                                        type='button'
                                        onClick={() => setSelectedColor(color)}
                                        className={`border px-5 py-3 text-[10px] font-bold uppercase tracking-widest transition ${(selectedColor || product.colors[0]) === color
                                            ? "border-[#F15A0A] text-[#F15A0A]"
                                            : "border-white/15 text-white hover:border-white"
                                            }`}
                                    >
                                        {color}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* size selected */}
                    <div className='mt-8'>
                        <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-white/60">
                            sizes -{" "}
                            <span className='font-bold text-white'>{selectedSize}</span>
                        </p>
                        <div className='flex flex-wrap gap-4'>
                            {product.sizes.map((size) => {
                                return (
                                    <button
                                        type='button'
                                        onClick={() => setSelectedSize(size)}
                                        className={`border px-5 py-3 text-[10px] font-bold uppercase tracking-widest transition ${(selectedSize || product.sizes[0]) === size
                                            ? "bg-[#F15A0A] text-black"
                                            : "border-white/15 text-white hover:border-white"
                                            }`}
                                    >
                                        {size}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* quantity and action  */}
                    <div className='mt-8 flex gap-3'>
                        <div className='flex shrink-0 items-center justify-between border border-white/15 '>
                            <button className='px-6 py-4 text-2xl cursor-pointer hover:text-[#F15A0A]'>-</button>
                            <span className='min-w-7 text-center text-lg'>1</span>
                            <button className='px-6 py-4 text-2xl cursor-pointer hover:text-[#F15A0A]'>+</button>
                        </div>
                        <button
                            type='button'
                            className="flex-1 bg-[#F15A0A] px-3 py-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-black transition hover:bg-[#FF8A19] sm:text-lg"
                        >
                            add to bag - ${product.price.toFixed(2)}
                        </button>

                        {/* wishlist button */}
                        <button
                            type="button"
                            onClick={(event) => {
                                event.stopPropagation();
                                toggleWishlist(product);
                            }}
                            aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
                            className="flex h-full px-5 items-center
                                     justify-center bg-black/40 backdrop-blur-sm border border-white/15
                                     cursor-pointer transition-transform duration-300
                                     hover:scale-110 active:scale-95"
                        >
                            <FiHeart
                                size={18}
                                className={`transition-colors duration-300
                                                        ${wishlisted
                                        ? "fill-red-500 text-red-500"
                                        : "fill-none text-white"
                                    }`}
                            />
                        </button>

                    </div>


                    {/* SHIPPING / RETURNS / FIT */}
                    <div>
                        {[
                            {
                                label: "Shipping",
                                value: "Free over $150. Ships in 2–4 days.",
                            },
                            {
                                label: "Returns",
                                value: "30 days, unworn with tags.",
                            },
                            {
                                label: "Fit",
                                value:
                                    product.fit || "Oversized. Size down for a regular fit.",
                            },
                        ].map((item)=>{
                            return(
                                <div
                                key={item.label}
                                className="flex flex-col gap-2 border-b border-white/15 py-4 sm:flex-row sm:items-center sm:justify-between">
                                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/60">
                                        {item.label}
                                    </span>
                                    <span className="text-sm text-white/60 sm:text-right">
                                        {item.value}
                                    </span>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails