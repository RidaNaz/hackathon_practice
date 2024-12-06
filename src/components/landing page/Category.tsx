import React from "react";
import Image from "next/image";

export default function Category() {
    return (
        <section className="mt-16 mb-16">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="mb-6">
                    <div className="flex gap-3 items-center mb-2">
                        <Image src="/rectangle.svg" alt="Next" width={15} height={15} />
                        <p className="text-[#DB4444] font-semibold text-sm">Categories</p>
                    </div>

                    <div className="flex justify-between items-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-semibold text-black">
                                Browse By Category
                            </h2>
                        {/* Custom Navigation Buttons */}
                        <div className="flex justify-end gap-2 mt-5">
                            <button className="custom-prev bg-transparent border-none cursor-pointer focus:outline-none">
                                <Image src="/leftarrow.svg" alt="Previous" width={35} height={35} />
                            </button>
                            <button className="custom-next bg-transparent border-none cursor-pointer focus:outline-none">
                                <Image src="/rightarrow.svg" alt="Next" width={35} height={35} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Categories Slider */}

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
                    <div className="border-black hover:bg-[#DB4444] py-5 gap-4 border-t border-r border-b border-l border-opacity-30 rounded-md hover:text-white flex flex-col items-center">
                        <Image src="phone.svg" alt="Next" width={50} height={50} />
                        <h1 className="text-black">Phones</h1>
                    </div>
                    <div className="border-black hover:bg-[#DB4444] py-5 gap-4 border-t border-r border-b border-l border-opacity-30 rounded-md hover:text-white flex flex-col items-center">
                        <Image src="computer.svg" alt="Next" width={50} height={50} />
                        <h1 className="text-black">Computers</h1>
                    </div>
                    <div className="border-black hover:bg-[#DB4444] py-5 gap-4 border-t border-r border-b border-l border-opacity-30 rounded-md hover:text-white flex flex-col items-center">
                        <Image src="smartwatch.svg" alt="Next" width={50} height={50} />
                        <h1 className="text-black">SmartWatch</h1>
                    </div>
                    <div className="border-black bg-[#DB4444] py-5 gap-4 border-t border-r border-b border-l border-opacity-30 rounded-md flex flex-col items-center">
                        <Image src="camera.svg" alt="Next" width={50} height={50} />
                        <h1 className="text-white">Camera</h1>
                    </div>
                    <div className="border-black hover:bg-[#DB4444] py-5 gap-4 border-t border-r border-b border-l border-opacity-30 rounded-md hover:text-white flex flex-col items-center">
                        <Image src="headphone.svg" alt="Next" width={50} height={50} />
                        <h1 className="text-black">Headphones</h1>
                    </div>
                    <div className="border-black hover:bg-[#DB4444] py-5 gap-4 border-t border-r border-b border-l border-opacity-30 rounded-md hover:text-white flex flex-col items-center">
                        <Image src="gaming.svg" alt="Next" width={50} height={50} />
                        <h1 className="text-black">Gaming</h1>
                    </div>
                </div>
            </div>
            <div className="border-b border-black mt-16 opacity-30"></div>
        </section>
    );
}
