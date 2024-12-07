"use client";

import React, { useState } from 'react';
import Image from "next/image"

export default function SingleProduct() {

    const [selectedSize, setSelectedSize] = useState('M'); // Default selected size is 'M'
    const [count, setCount] = useState(2); // Default value is 2

    return (
        <div>
            <div className="px-12 lg:px-24 xl:px-32 mb-36 mt-16">
                {/* Breadcrumb */}
                <div className="mb-6 text-md text-black flex gap-3">
                    <p className="opacity-50">Account </p>
                    <p className="opacity-50"> / </p>
                    <p className="opacity-50"> Gaming </p>
                    <p className="opacity-50"> / </p>
                    <p className="opacity-100"> Havic HV G-92 Gamepad</p>
                </div>

                <div className='container'>
                    <div className="flex items-start justify-between mt-16 gap-10">
                        <div className="container w-3/5 flex lg:gap-6">
                            <div className="grid gap-3 w-1/4">
                                <Image
                                    src="/g1.png"
                                    alt="product image"
                                    width={180}
                                    height={180} />
                                <Image
                                    src="/g2.png"
                                    alt="product image"
                                    width={180}
                                    height={180} />
                                <Image
                                    src="/g3.png"
                                    alt="product image"
                                    width={180}
                                    height={180} />
                                <Image
                                    src="/g4.png"
                                    alt="product image"
                                    width={180}
                                    height={180} />
                            </div>

                            <div >
                                <Image
                                    src="/gmain.png"
                                    alt="product image"
                                    width={500}
                                    height={500}
                                    className="h-500 w-500" />
                            </div>
                        </div>

                        <div className="text-black w-2/5 -mt-2">
                            <h1 className="font-semibold text-[25px]">Havic HV G-92 Gamepad</h1>
                            <div className="mt-2 flex gap-3">
                                <Image
                                    src="/star4.png"
                                    alt="paroduct stars"
                                    width={100}
                                    height={100} />
                                <p className="text-sm text-black opacity-50">
                                    (150 Reviews)
                                </p>
                                <p className="text-sm text-black opacity-50">
                                    |
                                </p>
                                <p className="text-sm text-[#00FF66] opacity-60"> In Stock </p>
                            </div>
                            <h2 className="text-2xl mt-2">$192.00</h2>
                            <p className="text-[15px] mt-3 mr-14">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                            <hr className="my-4 opacity-50 border-black" />


                            <div className="flex gap-4 items-center">
                                <p className="text-xl">Colours:</p>
                                <div className="flex gap-2">
                                    <div>
                                        <Image
                                            src="/blackoutline.svg"
                                            alt="black circle"
                                            width={18}
                                            height={18} />
                                        <Image
                                            src="bluecircle.svg"
                                            alt="inline circle"
                                            width={15}
                                            height={15}
                                            className="-mt-4 pl-1" />
                                    </div>
                                    <Image
                                        src="/circle.svg"
                                        alt="red circle"
                                        width={18}
                                        height={18} />
                                </div>
                            </div>

                            <div className="flex gap-4 items-center mt-6">
                                <p className="text-xl">Size:</p>
                                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                                    <button
                                        key={size}
                                        className={`rounded-md border w-8 h-8 text-sm ${selectedSize === size
                                            ? 'bg-[#DB4444] text-white'
                                            : 'border-black border-opacity-50 bg-white text-black'
                                            }`}
                                        onClick={() => setSelectedSize(size)} // Set the selected size
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>

                            <div className='mt-6 flex justify-between items-center'>
                                <div className="flex items-center rounded-md border border-black border-opacity-50">
                                    <button
                                        className="px-3 py-4 bg-white text-black border-r border-black border-opacity-50"
                                        onClick={() => setCount((prev) => Math.max(0, prev - 1))} // Decrease the count but prevent negative values
                                    >
                                        <Image
                                            src="/sub.svg"
                                            alt="sub icon"
                                            width={20}
                                            height={20} />
                                    </button>
                                    <p className="px-8 py-2 bg-white font-medium text-xl text-black">{count}</p>
                                    <button
                                        className="px-2 py-2 bg-[#DB4444] text-black border-l border-white border-opacity-50"
                                        onClick={() => setCount((prev) => prev + 1)} // Increase the count
                                    >
                                        <Image
                                            src="/add.svg"
                                            alt="add icon"
                                            width={25}
                                            height={25} />
                                    </button>
                                </div>
                                <button className="px-12 py-2 bg-[#DB4444] text-white rounded hover:bg-red-600">
                                    Buy Now
                                </button>
                                <div className='rounded-md border border-black border-opacity-50 w-10 h-10 p-2 bg-white'>
                                    <Image
                                        src="/heart.svg"
                                        alt="heart icon"
                                        width={25}
                                        height={25} />
                                </div>
                            </div>

                            <div className='mt-8 border border-black border-opacity-50 rounded-md'>
                                <div className='flex gap-5 py-6 px-6'>
                                    <Image
                                        src="/delivery2.svg"
                                        alt="delivery icon"
                                        width={40}
                                        height={40} />
                                    <div>
                                        <h3 className='text-[16px] font-semibold'>Free Delivery</h3>
                                        <p className='font-medium text-[12px] underline'>Enter your postal code for Delivery Availability</p>
                                    </div>
                                </div>
                                <hr className="-my-2 opacity-50 border-black" />
                                <div className='flex gap-5 py-6 px-6'>
                                    <Image
                                        src="/return.svg"
                                        alt="return icon"
                                        width={40}
                                        height={40} />
                                    <div>
                                        <h3 className='text-[16px] font-semibold'>Return Delivery</h3>
                                        <p className='font-medium text-[12px] '>Free 30 Days Delivery Returns. <span className='underline'> Details</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}