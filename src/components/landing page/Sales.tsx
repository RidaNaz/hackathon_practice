"use client"
import React from "react";
import { products } from "@/helper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import Image from "next/image";

export default function FlashSales() {
    return (
        <section className="-mt-[100px] mb-6">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="mb-6">
                    <div className="flex gap-3 items-center mb-2">
                        <Image src="/rectangle.svg" alt="Next" width={15} height={15} />
                        <p className="text-[#DB4444] font-semibold text-sm">Today's</p>
                    </div>


                    <div className="lg:flex justify-start gap-16 items-center mb-2 ">
                        <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-4 lg:mb-0">
                            Flash Sales
                        </h2>
                        <div className="flex justify-between items-center">
                            {/* Countdown Timer */}
                            <div className="flex items-center space-x-2 lg:space-x-4 text-black">
                                <div className="text-start">
                                    <p className="text-xs lg:text-md">Days</p>
                                    <h1 className="md:text-2xl lg:text-4xl font-bold">03</h1>
                                </div>
                                <div className="flex flex-col gap-1 lg:gap-2 mt-4">
                                    <Image src="/dot.svg" alt="Next" width={5} height={5} />
                                    <Image src="/dot.svg" alt="Next" width={5} height={5} />
                                </div>
                                <div className="text-start">
                                    <p className="text-xs lg:text-md">Hours</p>
                                    <h1 className="md:text-2xl lg:text-4xl font-bold">23</h1>
                                </div>
                                <div className="flex flex-col gap-1 lg:gap-2 mt-4">
                                    <Image src="/dot.svg" alt="Next" width={5} height={5} />
                                    <Image src="/dot.svg" alt="Next" width={5} height={5} />
                                </div>
                                <div className="text-start">
                                    <p className="text-xs lg:text-md">Minutes</p>
                                    <h1 className="md:text-2xl lg:text-4xl font-bold">19</h1>
                                </div>
                                <div className="flex flex-col gap-1 lg:gap-2 mt-4">
                                    <Image src="/dot.svg" alt="Next" width={5} height={5} />
                                    <Image src="/dot.svg" alt="Next" width={5} height={5} />
                                </div>
                                <div className="text-start">
                                    <p className="text-xs lg:text-md">Seconds</p>
                                    <h1 className="md:text-2xl lg:text-4xl font-bold">56</h1>
                                </div>
                            </div>

                            {/* Custom Navigation Buttons */}
                            <div className="flex gap-2 mt-5">
                                <button className="custom-prev bg-transparent border-none cursor-pointer focus:outline-none">
                                    <Image src="/leftarrow.svg" alt="Previous" width={35} height={35} />
                                </button>
                                <button className="custom-next bg-transparent border-none cursor-pointer focus:outline-none">
                                    <Image src="/rightarrow.svg" alt="Next" width={35} height={35} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Slider */}
                <Swiper
                    slidesPerView={0.6}
                    spaceBetween={-90}
                    modules={[Navigation, Pagination, Autoplay]} // Enable navigation, pagination, and autoplay

                    loop={true} // Enable looping
                    autoplay={{
                        delay: 3000, // Autoplay speed in ms
                        disableOnInteraction: false, // Keep autoplay after interaction
                    }}
                    navigation={{
                        prevEl: ".custom-prev",
                        nextEl: ".custom-next",
                    }} // Use custom buttons
                    breakpoints={{
                        480: {
                            slidesPerView: 0.6, // 1 slides on small screens
                        },
                        640: {
                            slidesPerView: 1.6, // 2 slides on medium screens
                        },
                        768: {
                            slidesPerView: 1.6, // 3 slides on large screens
                        },
                        1024: {
                            slidesPerView: 3.6, // 3 slides on large screens
                        },
                    }}
                    className="mySwiper"
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <div className="container w-2/3">
                                <div className="rounded-md relative bg-[#F5F5F5]">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={500}
                                        height={500}
                                        className="w-60 h-52 rounded-md py-12 px-10"
                                    />
                                    <button className="absolute bottom-0 w-full hover:bg-black text-[#F5F5F5] hover:text-white py-2 rounded-b-md">
                                        Add to Cart
                                    </button>
                                    <span className="absolute top-2 left-2 bg-[#DB4444] text-white text-sm px-3 py-1 rounded">
                                        -{product.discount}%
                                    </span>
                                    <button className="absolute top-2 right-2 bg-white rounded-full p-2">
                                        <Image
                                            src="/heart.svg"
                                            alt="heart icon"
                                            width={15}
                                            height={15} />
                                    </button>
                                    <button className="absolute top-12 right-2 bg-blsck bg-white rounded-full p-2">
                                        <Image
                                            src="/eye.svg"
                                            alt="heart icon"
                                            width={15}
                                            height={20} />
                                    </button>
                                </div>
                                <h3 className="mt-4 text-lg font-medium text-black">
                                    {product.name}
                                </h3>
                                <div className="flex gap-4 mt-2">
                                    <p className="text-md text-[#DB4444]">
                                        ${product.price}
                                    </p>
                                    <p className="text-md text-gray-500 line-through">
                                        ${product.originalPrice}
                                    </p>
                                </div>
                                <div className="mt-2 flex gap-3">
                                    <Image
                                        src={product.star}
                                        alt={product.name}
                                        width={100}
                                        height={100} />
                                    <p className="text-sm text-black opacity-50">
                                        ({product.reviews})
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* View All Products Button */}
                <div className="text-center mt-20">
                    <button className="bg-[#DB4444] font-medium text-white px-12 py-3 rounded-md">
                        View All Products
                    </button>
                </div>
            </div>
        </section>
    );
}
