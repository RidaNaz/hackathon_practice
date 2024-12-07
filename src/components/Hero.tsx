"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex flex-wrap md:h-screen">
            {/* Sidebar */}
            <aside
                className={`absolute md:relative md:h-[50px] bg-white text-black w-4/5 md:w-1/5 z-10 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0 pl-20" : "-translate-x-full md:translate-x-0"
                    }`}
            >
                <ul className="py-9 border-r space-y-4">
                    <li className="flex cursor-pointer justify-between pr-5 hover:text-[#DB4444]">
                        Woman&apos;s Fashion
                        <Image
                            src="/arrow.svg"
                            alt="arrow"
                            width={7}
                            height={7}
                            className="lg:block hidden"
                        />
                    </li>
                    <li className="flex cursor-pointer justify-between pr-5 hover:text-[#DB4444]">
                        Men&apos;s Fashion
                        <Image
                            src="/arrow.svg"
                            alt="arrow"
                            width={7}
                            height={7}
                            className="lg:block hidden"
                        />
                    </li>
                    <li className="cursor-pointer hover:text-[#DB4444]">Electronics</li>
                    <li className="cursor-pointer hover:text-[#DB4444]">Home &amp; Lifestyle</li>
                    <li className="cursor-pointer hover:text-[#DB4444]">Medicine</li>
                    <li className="cursor-pointer hover:text-[#DB4444]">Sports &amp; Outdoor</li>
                    <li className="cursor-pointer hover:text-[#DB4444]">Baby&apos;s &amp; Toys</li>
                    <li className="cursor-pointer hover:text-[#DB4444]">Groceries &amp; Pets</li>
                    <li className="cursor-pointer hover:text-[#DB4444]">Health &amp; Beauty</li>
                </ul>
            </aside>

            {/* Hero Section */}
            <section className="flex-1 pt-9 md:pl-10 relative">
                {/* Hamburger Menu for Mobile */}
                <button
                    className="md:hidden absolute top-4 left-4 z-20 bg-white p-2 rounded-md shadow"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    <Image
                        src="/arrow.svg"
                        alt="menu icon"
                        width={7}
                        height={7}
                    />
                </button>

                {/* Hero Image */}
                <div className="relative w-full h-[400px] sm:h-[600px] md:h-[800px]">
                    <Image
                        src="/heroimage.jpg"
                        alt="Hero image"
                        width={2000}
                        height={1200}
                    />
                </div>
            </section>

            {/* Background overlay when sidebar is open */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-5 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}
        </div>
    );
}
