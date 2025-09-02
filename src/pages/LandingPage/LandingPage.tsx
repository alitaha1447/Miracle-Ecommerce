import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart, FiSearch, FiMenu } from "react-icons/fi";
// import { Link, } from "react-router";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import { FiHeart, FiStar } from "react-icons/fi";
import { MdStorefront } from "react-icons/md";
// import Logo from "../../assests/images/logo/logo.png";
import Logo from '../../assests/images/logo/MiracleInfoserv.png'
import Product1 from "../../assests/images/products/img1.png";
import Banner1 from "../../assests/images/banner/banner1.png";
import Banner2 from "../../assests/images/banner/banner2.png";
import Banner3 from "../../assests/images/banner/banner3.png";
import Banner4 from "../../assests/images/banner/banner4.png";

const images = [Banner1, Banner2, Banner3, Banner4];

type Product = {
    id: number;
    // slug: string;
    title: string;
    price: number;
    mrp: number;
    rating: number;
    reviews: number;
    image: string;
    badge?: string;
};

const products: Product[] = [
    { id: 1, title: "Wireless Headphones with Noise Cancellation", price: 1299, mrp: 1999, rating: 4.3, reviews: 232, image: Product1, badge: "Best Seller" },
    { id: 2, title: "Smartwatch with AMOLED Display", price: 2499, mrp: 3499, rating: 4.1, reviews: 118, image: Product1, badge: "Hot" },
    { id: 3, title: "Bluetooth Speaker Portable", price: 999, mrp: 1599, rating: 4.4, reviews: 521, image: Product1 },
    { id: 4, title: "Gaming Mouse RGB 7200 DPI", price: 799, mrp: 1299, rating: 4.2, reviews: 310, image: Product1 },
    { id: 5, title: "Stainless Steel Bottle 1L", price: 349, mrp: 699, rating: 4.0, reviews: 90, image: Product1 },
    { id: 6, title: "Backpack 30L Water Resistant", price: 899, mrp: 1499, rating: 4.5, reviews: 640, image: Product1, badge: "Top Rated" },
    { id: 7, title: "LED Desk Lamp with USB", price: 599, mrp: 1099, rating: 4.1, reviews: 205, image: Product1 },
    { id: 8, title: "Ceramic Coffee Mug 350ml", price: 249, mrp: 449, rating: 4.3, reviews: 72, image: Product1 },
];



const LandingPage: React.FC = () => {
    const [index, setIndex] = useState(0);

    // autoplay
    useEffect(() => {
        const id = setInterval(() => {
            setIndex((i) => (i + 1) % images.length);
        }, 2000);
        return () => clearInterval(id);
    }, []);



    return (
        <div className="bg-[#f1f2f4]">
            <header className="inset-x-0 top-0 z-20 bg-white shadow-sm">
                <div className="mx-auto max-w-full py-3 px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between gap-4">
                        {/* Logo */}
                        <div className="">
                            <img src={Logo} alt="Flipkart Logo" className="h-10 w-auto object-contain" />
                        </div>

                        {/* Search Bar */}
                        <div className="flex-1 max-w-xl">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search for products, brands and more"
                                    className="w-full rounded-md border-0 outline-none bg-[#f0f5ff] py-2 pl-10 pr-4 text-black placeholder-gray-600"
                                />
                                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-black text-lg" />
                            </div>
                        </div>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-6">
                            <div className="flex items-center gap-2 cursor-pointer hover:text-cyan-600">
                                <CgProfile />
                                <span>Taha</span>
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer hover:text-cyan-600">
                                <FiShoppingCart />
                                <span>Cart</span>
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer hover:text-cyan-600">
                                <MdStorefront />
                                <span>Become a Seller</span>
                            </div>
                        </div>

                        {/* Mobile Menu Icon */}
                        <div className="md:hidden flex items-center">
                            <FiMenu className="text-2xl cursor-pointer" />
                        </div>
                    </div>
                </div>
            </header>
            {/* Content */}
            <div className="w-full px-3 py-2">
                <div className="bg-white px-5 py-5">
                    <div className="w-full overflow-x-auto custom-scrollbar">
                        <div className="flex gap-2 w-max mx-auto">
                            {Array.from({ length: 8 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="min-w-[100px] p-4 cursor-pointer"
                                >
                                    <div className="flex flex-col items-center justify-center text-white">
                                        <img src={Product1} alt="product 1" />
                                        <span className="mt-1 text-sm text-center text-black">
                                            Home & Furniture
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner */}
            <div className="w-full  relative overflow-hidden px-3 py-2">
                <div className="relative bg-[#ffffff] shadow-sm" aria-roledescription="carousel" aria-label="Promotional banners">
                    {/* Single image swaps src */}
                    <div className="w-full">
                        <img src={images[index]} alt={`Banner ${index + 1}`} />
                    </div>

                    {/* Dots */}
                    <div className="flex items-center justify-center gap-2 py-2">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                aria-label={`Go to slide ${i + 1}`}
                                aria-current={i === index}
                                className={`h-2.5 w-2.5 rounded-full transition ${i === index ? "bg-[black]" : "bg-[grey] hover:bg-white/80"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {/* Product Cards */}
            <section className="w-full px-3 py-2">
                <div className="bg-white">
                    <div className="mx-auto max-w-6xl px-3 py-4">
                        <h2 className="mb-3 text-lg font-semibold text-gray-800">Top Picks for You</h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                            {products.map((p) => (
                                <div
                                    key={p.id}
                                    // to={`/product/${p.id}`}
                                    className="rounded-lg overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
                                >
                                    {/* Image / Badge / Wish */}
                                    <div className="relative">
                                        <div className="h-40 w-full bg-gray-50 flex items-center justify-center">
                                            <img
                                                src={p.image}
                                                alt={p.title}
                                                className="h-full w-full object-contain"
                                                loading="lazy"
                                            />
                                        </div>

                                        {/* {p.badge && (
                                            <span className="absolute left-2 top-2 rounded-md bg-orange-100 text-orange-700 text-xs font-medium px-2 py-0.5">
                                                {p.badge}
                                            </span>
                                        )} */}

                                        {/* <button
                                            type="button"
                                            className="absolute right-2 top-2 rounded-full p-2 bg-white/90 text-gray-600 hover:text-red-500 shadow-sm"
                                            aria-label="Add to wishlist"
                                        >
                                            <FiHeart />
                                        </button> */}
                                    </div>

                                    {/* Content */}
                                    <div className="p-3">
                                        <h3 className="text-sm font-medium text-gray-800 overflow-hidden text-ellipsis whitespace-nowrap">
                                            {p.title}
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                                            High-quality headphones with noise cancellation and immersive sound.
                                        </p>
                                        <div className="mt-3 flex items-center gap-2">
                                            <span className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-2.5 py-0.5 text-xs font-medium">
                                                <strong>Condition:</strong> Brand New
                                            </span>
                                            <span className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 px-2 py-0.5 text-xs font-medium">
                                                Token: 5
                                            </span>
                                        </div>


                                        {/* <div className="mt-1 flex items-center gap-2">
                                            <span className="inline-flex items-center rounded px-1.5 py-0.5 text-xs bg-green-100 text-green-700">
                                                {p.rating}
                                                <FiStar className="ml-1" />
                                            </span>
                                            <span className="text-xs text-gray-500">({p.reviews})</span>
                                        </div> */}

                                        {/* <div className="mt-2 flex items-baseline gap-2">
                                            <span className="text-lg font-semibold text-gray-900">₹{p.price}</span>
                                            <span className="text-sm text-gray-500 line-through">₹{p.mrp}</span>
                                            <span className="text-sm text-green-600 font-medium">
                                                {Math.round((1 - p.price / p.mrp) * 100)}% off
                                            </span>
                                        </div> */}

                                        <button
                                            className="mt-3 w-full rounded-md bg-brand-500 hover:bg-brand-600 text-white text-sm py-2 transition"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
