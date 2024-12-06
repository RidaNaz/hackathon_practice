import React from "react";
import Image from "next/image";
import { exploreProducts, exploreProducts2 } from "@/helper";

export default function Explore() {
    return (
        <section className="mt-16 mb-16">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="mb-6">
                    <div className="flex gap-3 items-center mb-4">
                        <Image src="/rectangle.svg" alt="Next" width={15} height={15} />
                        <p className="text-[#DB4444] font-semibold text-sm">Our Products</p>
                    </div>

                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-4xl font-semibold text-black">
                            Explore Our Products
                        </h2>
                        {/* Custom Navigation Buttons */}
                        <div className="flex justify-end gap-2 mt-5 sm:block hidden">
                            <button className="custom-prev bg-transparent border-none cursor-pointer focus:outline-none">
                                <Image src="/leftarrow.svg" alt="Previous" width={35} height={35} />
                            </button>
                            <button className="custom-next bg-transparent border-none cursor-pointer focus:outline-none">
                                <Image src="/rightarrow.svg" alt="Next" width={35} height={35} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {exploreProducts.map((product) => (
                            <div key={product.id} >
                                <div className="rounded-md relative bg-[#F5F5F5] pb-3">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={2000}
                                        height={2000}
                                        className="w-60 h-60 rounded-md py-12 px-10"
                                    />
                                    <button className="absolute top-2 right-2 bg-white rounded-full p-2">
                                        <Image
                                            src="/heart.svg"
                                            alt="heart icon"
                                            width={15}
                                            height={15} />
                                    </button>
                                    <button className="absolute bottom-0 w-full hover:bg-black text-[#F5F5F5] hover:text-white py-2 rounded-b-md">
                                        Add to Cart
                                    </button>
                                    <button className="absolute top-12 right-2 bg-white rounded-full p-2">
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
                                <div className="flex gap-2 mt-2 items-center">
                                    <p className="text-md text-[#DB4444]">
                                        ${product.price}
                                    </p>
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
                        ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {exploreProducts2.map((product) => (
                            <div key={product.id} className="mt-6">
                                <div className="rounded-md relative bg-[#F5F5F5]">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={500}
                                        height={500}
                                        className="w-60 h-60 rounded-md py-12 px-10"
                                    />
                                    <button className="absolute top-2 right-2 bg-white rounded-full p-2">
                                        <Image
                                            src="/heart.svg"
                                            alt="heart icon"
                                            width={15}
                                            height={15} />
                                    </button>
                                    <button className="absolute top-12 right-2 bg-white rounded-full p-2">
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
                                <div className="flex gap-4 mt-2 items-center">
                                    <p className="text-md text-[#DB4444]">
                                        ${product.price}
                                    </p>
                                    <Image
                                        src={product.star}
                                        alt={product.name}
                                        width={100}
                                        height={100} />
                                    <p className="text-sm text-black opacity-50">
                                        ({product.reviews})
                                    </p>
                                </div>

                                <div className="mt-2 flex gap-2">
                                    <div>
                                        <Image
                                            src="/blackoutline.svg"
                                            alt="black circle"
                                            width={18}
                                            height={18} />
                                        <Image
                                            src={product.color}
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
                        ))}
                    </div>
                </div>

                {/* View All Products Button */}
                <div className="text-center mt-20">
                    <button className="bg-[#DB4444] font-medium text-white px-6 py-2 sm:px-12 sm:py-3 rounded-md">
                        View All Products
                    </button>
                </div>
            </div>
        </section>
    );
}
