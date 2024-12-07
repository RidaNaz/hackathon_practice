"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function SingleProduct() {
    const [selectedSize, setSelectedSize] = useState("M"); // Default selected size is 'M'
    const [count, setCount] = useState(2); // Default value is 2

    return (
        <div>
            <div className="px-8 md:px-12 lg:px-24 xl:px-32 mb-36 mt-16">
                {/* Breadcrumb */}
                <div className="mb-6 text-sm lg:text-[18px] text-black flex gap-3">
                    <p className="opacity-50">Account</p>
                    <p className="opacity-50"> / </p>
                    <p className="opacity-50">Gaming</p>
                    <p className="opacity-50"> / </p>
                    <p className="opacity-100">Havic HV G-92 Gamepad</p>
                </div>

                <div className="container">
                    <div className="lg:flex items-start justify-between mt-16 gap-10">
                        {/* Images Section */}
                        <div className="w-full lg:w-3/5 grid grid-cols-3 gap-4">
                            {/* Thumbnails */}
                            <div className="grid md:block hidden w-4/5">
                                <Image
                                    src="/g1.png"
                                    alt="product image"
                                    width={500}
                                    height={500}
                                    className="object-cover w-full h-auto rounded-md"
                                />
                                <Image
                                    src="/g2.png"
                                    alt="product image"
                                    width={500}
                                    height={500}
                                    className="object-cover w-full h-auto rounded-md"
                                />
                                <Image
                                    src="/g3.png"
                                    alt="product image"
                                    width={500}
                                    height={500}
                                    className="object-cover w-full h-auto rounded-md"
                                />
                                <Image
                                    src="/g4.png"
                                    alt="product image"
                                    width={500}
                                    height={500}
                                    className="object-cover w-full h-auto rounded-md"
                                />
                            </div>

                            {/* Main Image */}
                            <div className="md:col-span-2 col-span-3">
                                <Image
                                    src="/gmain.png"
                                    alt="Main product image"
                                    width={500}
                                    height={500}
                                    className="object-contain w-full h-auto rounded-md"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Product Details Section */}
                        <div className="text-black w-full lg:w-2/5 mt-12 lg:-mt-2">
                            <h1 className="font-semibold text-2xl">Havic HV G-92 Gamepad</h1>
                            <div className="mt-2 sm:flex gap-3">
                                <Image
                                    src="/star4.png"
                                    alt="product stars"
                                    width={80}
                                    height={20}
                                    className="object-contain"
                                />
                                <div className="flex sm:flex-none gap-2">
                                <p className="text-sm text-black opacity-50">(150 Reviews)</p>
                                <p className="text-sm text-black opacity-50">|</p>
                                <p className="text-sm text-[#00FF66] opacity-60">In Stock</p>
                                </div>
                            </div>
                            <h2 className="text-2xl mt-2">$192.00</h2>
                            <p className="text-sm mt-3 xl:mr-14">
                                PlayStation 5 Controller Skin High-quality vinyl with air channel adhesive for easy bubble-free install &
                                mess-free removal. Pressure sensitive.
                            </p>
                            <hr className="my-4 opacity-50 border-black" />

                            {/* Colors */}
                            <div className="flex gap-4 items-center">
                                <p className="text-xl">Colours:</p>
                                <div className="flex gap-2">
                                    <Image
                                        src="/blackoutline.svg"
                                        alt="black circle"
                                        width={18}
                                        height={18}
                                        className="relative object-cover"
                                    />
                                    <Image
                                        src="/bluecircle.svg"
                                        alt="blue circle"
                                        width={14}
                                        height={14}
                                        className="absolute pt-1 pl-1 object-cover items-center"
                                    />
                                    <Image
                                        src="/circle.svg"
                                        alt="red circle"
                                        width={18}
                                        height={18}
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Sizes */}
                            <div className="flex gap-2 md:gap-4 items-center mt-6">
                                <p className="text-lg md:text-xl">Size:</p>
                                {["XS", "S", "M", "L", "XL"].map((size) => (
                                    <button
                                        key={size}
                                        className={`rounded-md border w-8 h-8 text-sm ${selectedSize === size
                                                ? "bg-[#DB4444] text-white"
                                                : "border-black border-opacity-50 bg-white text-black"
                                            }`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>

                            {/* Quantity and Buy Now */}
                            <div className="mt-6 flex flex-wrap justify-between items-center gap-4">
                                <div className="flex items-center rounded-md border border-black border-opacity-50">
                                    <button
                                        className="px-3 py-5 bg-white text-black border-r border-black border-opacity-50"
                                        onClick={() => setCount((prev) => Math.max(0, prev - 1))}
                                    >
                                        <Image src="/sub.svg" alt="subtract" width={20} height={20} />
                                    </button>
                                    <p className="px-8 py-2 bg-white font-medium text-xl text-black">{count}</p>
                                    <button
                                        className="px-2 py-2 bg-[#DB4444] text-black border-l border-white border-opacity-50"
                                        onClick={() => setCount((prev) => prev + 1)}
                                    >
                                        <Image src="/add.svg" alt="add" width={25} height={25} />
                                    </button>
                                </div>
                                <button className="lg:px-12 px-6 py-2 bg-[#DB4444] text-white rounded hover:bg-red-600">
                                    Buy Now
                                </button>
                                <div className="rounded-md border border-black border-opacity-50 w-10 h-10 p-2 bg-white">
                                    <Image src="/heart.svg" alt="heart" width={25} height={25} />
                                </div>
                            </div>

                            {/* Delivery Info */}
                            <div className="mt-8 border border-black border-opacity-50 rounded-md">
                                <div className="flex gap-5 py-6 px-6">
                                    <Image
                                        src="/delivery2.svg"
                                        alt="delivery icon"
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                    />
                                    <div>
                                        <h3 className="text-base font-semibold">Free Delivery</h3>
                                        <p className="font-medium text-xs underline">
                                            Enter your postal code for Delivery Availability
                                        </p>
                                    </div>
                                </div>
                                <hr className="-my-2 opacity-50 border-black" />
                                <div className="flex gap-5 py-6 px-6">
                                    <Image
                                        src="/return.svg"
                                        alt="return icon"
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                    />
                                    <div>
                                        <h3 className="text-base font-semibold">Return Delivery</h3>
                                        <p className="font-medium text-xs">
                                            Free 30 Days Delivery Returns. <span className="underline">Details</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
