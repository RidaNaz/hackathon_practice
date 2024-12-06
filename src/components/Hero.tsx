import Image from "next/image";

export default function Hero() {
    return (
        <div className="flex flex-wrap h-screen">
            <aside className="w-1/5 bg-white text-black md:block hidden">
                <ul className="pt-9 border-r space-y-4">
                    <li className="flex cursor-pointer justify-between pr-5 hover:text-blue-500">Woman's Fashion
                        <Image
                            src="/arrow.svg"
                            alt="arrow"
                            width={7}
                            height={7}
                            className="lg:block hidden" />
                    </li>
                    <li className="flex cursor-pointer justify-between pr-5 hover:text-blue-500">Men's Fashion
                        <Image
                            src="/arrow.svg"
                            alt="arrow"
                            width={7}
                            height={7}
                            className="lg:block hidden" />
                    </li>
                    <li className="cursor-pointer hover:text-blue-500">Electronics</li>
                    <li className="cursor-pointer hover:text-blue-500">Home & Lifestyle</li>
                    <li className="cursor-pointer hover:text-blue-500">Medicine</li>
                    <li className="cursor-pointer hover:text-blue-500">Sports & Outdoor</li>
                    <li className="cursor-pointer hover:text-blue-500">Baby's & Toys</li>
                    <li className="cursor-pointer hover:text-blue-500">Groceries & Pets</li>
                    <li className="cursor-pointer hover:text-blue-500">Health & Beauty</li>
                </ul>
            </aside>

            <section className="flex-1 pt-9 pl-10">
                <div className="relative w-full h-[400px] md:h-[600px]">
                    <Image
                        src="/heroimage.jpg"
                        alt="Hero image"
                        width={2000}
                        height={1200}
                        />
                </div>
            </section>
        </div>
    );
}
