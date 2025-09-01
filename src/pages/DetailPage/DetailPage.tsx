

// src/pages/ProductDetail/ProductDetail.tsx
import React, { useState } from "react";
import { useParams } from "react-router";
import {
    FiStar,
    FiHeart,
    FiTruck,
    FiTag,
    FiChevronDown,
    FiMapPin,
} from "react-icons/fi";

// TODO: adjust these paths to your files
import Product1 from "../../assests/images/products/img1.png";

const gallery = [Product1, Product1, Product1, Product1];

const DetailPage: React.FC = () => {
    const [active, setActive] = useState(0);
    const [size, setSize] = useState<string | null>(null);
    const [pincode, setPincode] = useState("");

    const price = 1299;
    const mrp = 1999;
    const discount = Math.round((1 - price / mrp) * 100);

    const { id } = useParams<{ id: string }>();
    console.log(id)
    return (
        <section className="w-full bg-[#f1f2f4]">
            {/* container */}
            <div className="mx-auto max-w-6xl px-3 sm:px-6 lg:px-8 py-4">
                {/* Breadcrumb (optional) */}
                {/* <nav className="mb-3 text-xs text-gray-500">
                    <span className="hover:underline cursor-pointer">Home</span> /{" "}
                    <span className="hover:underline cursor-pointer">Electronics</span> /{" "}
                    <span className="text-gray-700">Product Name</span>
                </nav> */}

                {/* Grid: Left gallery / Middle info / Right sticky actions */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                    {/* LEFT: Gallery */}
                    <div className="lg:col-span-4">
                        <div className="bg-white rounded-md p-3">
                            <div className="flex lg:flex-row flex-col gap-3">
                                {/* Thumbs (desktop vertical) */}
                                <div className="hidden lg:flex flex-col gap-2 max-h-[420px] overflow-y-auto no-scrollbar">
                                    {gallery.map((img, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActive(i)}
                                            className={`h-16 w-16 rounded-md border ${i === active
                                                ? "border-brand-500 ring-2 ring-brand-200"
                                                : "border-gray-200 hover:border-gray-300"
                                                } overflow-hidden`}
                                            aria-label={`Thumbnail ${i + 1}`}
                                        >
                                            <img
                                                src={img}
                                                alt={`thumb ${i + 1}`}
                                                className="h-full w-full object-contain"
                                            />
                                        </button>
                                    ))}
                                </div>

                                {/* Main Image */}
                                <div className="flex-1">
                                    {/* <div className="w-full h-80 sm:h-[22rem] md:h-[26rem] lg:h-[28rem] bg-white rounded-md border border-gray-200 overflow-hidden flex items-center justify-center"> */}
                                    <img
                                        src={gallery[active]}
                                        alt="product main"
                                        className="h-full w-full object-contain transition-transform duration-300 hover:scale-[1.03]"
                                    />
                                    {/* </div> */}

                                    {/* Thumbs (mobile horizontal) */}
                                    {/* <div className="mt-3 flex lg:hidden gap-2 overflow-x-auto no-scrollbar">
                                        {gallery.map((img, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setActive(i)}
                                                className={`h-16 w-16 rounded-md border flex-none ${i === active
                                                    ? "border-brand-500 ring-2 ring-brand-200"
                                                    : "border-gray-200"
                                                    } overflow-hidden`}
                                            >
                                                <img
                                                    src={img}
                                                    alt={`thumb ${i + 1}`}
                                                    className="h-full w-full object-contain"
                                                />
                                            </button>
                                        ))}
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MIDDLE: Info */}
                    <div className="lg:col-span-6">
                        <div className="bg-white rounded-md p-4">
                            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                                Wireless Headphones with Noise Cancellation (Black)
                            </h1>

                            {/* Ratings */}
                            <div className="mt-2 flex items-center gap-3">
                                <span className="inline-flex items-center rounded px-2 py-0.5 text-xs bg-green-100 text-green-700">
                                    4.3 <FiStar className="ml-1" />
                                </span>
                                <span className="text-xs text-gray-500">232 ratings & 38 reviews</span>
                            </div>

                            {/* Price */}
                            <div className="mt-3 flex items-baseline gap-2">
                                <span className="text-2xl font-semibold text-gray-900">₹{price}</span>
                                <span className="text-sm text-gray-500 line-through">₹{mrp}</span>
                                <span className="text-sm text-green-600 font-medium">{discount}% off</span>
                            </div>

                            {/* Offers */}
                            <div className="mt-4">
                                <div className="flex items-center gap-2 text-gray-900 font-medium">
                                    <FiTag /> Available offers
                                </div>
                                <ul className="mt-2 space-y-1 text-sm text-gray-700">
                                    <li>Bank Offer: 10% off on ABC Bank Credit Cards</li>
                                    <li>Special Price: Get extra ₹100 off (price inclusive)</li>
                                    <li>No Cost EMI available on select cards</li>
                                </ul>
                            </div>

                            {/* Size / Variant */}
                            <div className="mt-5">
                                <div className="text-sm text-gray-700 mb-2">Size</div>
                                <div className="flex flex-wrap gap-2">
                                    {["S", "M", "L", "XL"].map((s) => (
                                        <button
                                            key={s}
                                            onClick={() => setSize(s)}
                                            className={`px-3 py-1.5 rounded-md border text-sm ${size === s
                                                ? "border-brand-500 bg-brand-50 text-brand-700"
                                                : "border-gray-300 hover:border-gray-400"
                                                }`}
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Highlights */}
                            <div className="mt-5">
                                <div className="text-sm text-gray-700 mb-1 font-medium">Highlights</div>
                                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                                    <li>Active Noise Cancellation up to 35dB</li>
                                    <li>40mm drivers, Deep Bass</li>
                                    <li>Up to 30 hours playback</li>
                                    <li>Bluetooth 5.3, Type-C Fast Charging</li>
                                </ul>
                            </div>

                            {/* Specifications (collapsible look) */}
                            <details className="mt-5 group">
                                <summary className="flex items-center justify-between cursor-pointer select-none text-gray-900 font-medium">
                                    Specifications
                                    <FiChevronDown className="transition group-open:rotate-180" />
                                </summary>
                                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-700">
                                    <div>
                                        <div className="text-gray-500">Model Name</div>
                                        <div>WH-NC500</div>
                                    </div>
                                    <div>
                                        <div className="text-gray-500">Color</div>
                                        <div>Black</div>
                                    </div>
                                    <div>
                                        <div className="text-gray-500">Connectivity</div>
                                        <div>Bluetooth</div>
                                    </div>
                                    <div>
                                        <div className="text-gray-500">Warranty</div>
                                        <div>1 Year</div>
                                    </div>
                                </div>
                            </details>

                            {/* Delivery / Pincode */}
                            {/* <div className="mt-6">
                                <div className="text-sm text-gray-700 mb-2 font-medium">Delivery</div>
                                <div className="flex items-center gap-2">
                                    <div className="relative flex-1 max-w-xs">
                                        <FiMapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                        <input
                                            value={pincode}
                                            onChange={(e) => setPincode(e.target.value)}
                                            placeholder="Enter delivery pincode"
                                            className="w-full rounded-md border border-gray-300 pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-200"
                                        />
                                    </div>
                                    <button className="px-4 py-2 rounded-md bg-brand-500 hover:bg-brand-600 text-white text-sm">
                                        Check
                                    </button>
                                </div>
                                <div className="mt-2 flex items-center gap-2 text-sm text-gray-700">
                                    <FiTruck /> Delivery by <span className="font-medium">Tomorrow</span>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    {/* RIGHT: Sticky Actions */}
                    {/* <div className="lg:col-span-2">
                        <div className="lg:sticky lg:top-20">
                            <div className="bg-white rounded-md p-4 shadow-sm border border-gray-200">
                                <div className="text-sm text-gray-500">Seller</div>
                                <div className="text-sm text-gray-900 font-medium">RetailHub Pvt Ltd</div>
                                <div className="mt-2 text-xs text-gray-600">7 Day Replacement Policy</div>

                                <div className="mt-4 grid grid-cols-2 gap-2">
                                    <button className="rounded-md bg-brand-500 hover:bg-brand-600 text-white text-sm py-2">
                                        Add to Cart
                                    </button>
                                    <button className="rounded-md bg-orange-500 hover:bg-orange-600 text-white text-sm py-2">
                                        Buy Now
                                    </button>
                                </div>

                                <button
                                    className="mt-3 w-full rounded-md border border-gray-300 text-gray-700 text-sm py-2 hover:bg-gray-50 inline-flex items-center justify-center gap-2"
                                    aria-label="Add to wishlist"
                                >
                                    <FiHeart /> Wishlist
                                </button>

                                <div className="mt-4 text-xs text-gray-600">
                                    <span className="font-medium text-gray-800">Secure transaction</span> • Cash on Delivery available
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>

                {/* Reviews section (simple) */}
                {/* <div className="mt-4 bg-white rounded-md p-4">
                    <h3 className="text-base font-semibold text-gray-900">Ratings & Reviews</h3>
                    <div className="mt-2 flex items-center gap-2">
                        <span className="inline-flex items-center rounded px-2 py-0.5 text-sm bg-green-100 text-green-700">
                            4.3 <FiStar className="ml-1" />
                        </span>
                        <span className="text-sm text-gray-500">232 ratings & 38 reviews</span>
                    </div>

                    <ul className="mt-3 space-y-3">
                        <li className="border-t border-gray-100 pt-3">
                            <div className="text-sm text-gray-800 font-medium">Great sound, comfy fit</div>
                            <div className="text-xs text-gray-500">by Rahul • 2 days ago</div>
                            <p className="mt-1 text-sm text-gray-700">
                                Bass is punchy and ANC works well in the metro. Battery life is solid.
                            </p>
                        </li>
                        <li className="border-t border-gray-100 pt-3">
                            <div className="text-sm text-gray-800 font-medium">Value for money</div>
                            <div className="text-xs text-gray-500">by Neha • 1 week ago</div>
                            <p className="mt-1 text-sm text-gray-700">Loving it at this price point. Mic quality is decent.</p>
                        </li>
                    </ul>
                </div> */}
            </div>
        </section>
    );
};

export default DetailPage;
