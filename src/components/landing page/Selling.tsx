import React from "react";
import Image from "next/image";
import { sellingProducts } from "@/helper";

export default function Selling() {
    return (
        <section className="mt-16 mb-10">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="mb-6">
                    <div className="flex gap-3 items-center mb-4">
                        <Image src="/rectangle.svg" alt="Next" width={15} height={15} />
                        <p className="text-[#DB4444] font-semibold text-sm">This Month</p>
                    </div>


                    <div className="sm:flex justify-between items-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-semibold text-black md:mb-0 mb-4">
                            Best Selling Products
                        </h2>
                        <div className="text-center">
                            <button className="bg-[#DB4444] font-medium text-white py-2 px-6 md:px-12 md:py-4 rounded-md">
                                View All
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                    {sellingProducts.map((product) => (
                        <div key={product.id}>
                            <div className="rounded-md relative bg-[#F5F5F5]">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={2000}
                                    height={2000}
                                    className="w-60 h-60 rounded-md py-12 px-10 "
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
                            <div className="flex gap-4 mt-2">
                                <p className="text-md text-[#DB4444]">
                                    ${product.price}
                                </p>
                                {product.originalPrice && (
                                    <p className="text-md text-gray-500 line-through">
                                        ${product.originalPrice}
                                    </p>
                                )}
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
                    ))}
                </div>
            </div>
        </section>
    );
}
