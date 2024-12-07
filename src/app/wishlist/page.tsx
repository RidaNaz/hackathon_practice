import Image from "next/image";
import WishNav from "./WishNav";
import { wishlist, wishlist2 } from "@/helper";

export default function Wishlist() {
    return (
        <div>
            <WishNav />
            <div className="px-8 md:px-12 lg:px-24 xl:px-32 mb-36">
                <div className="flex justify-between items-center text-black mt-16">
                    <p className="text-[20px]">Wishlist (4)</p>
                    <button className="bg-white border-black border-opacity-50 border-t border-r border-l border-b sm:py-3 sm:px-10 rounded-sm py-1 px-5 sm:block hidden">Move All To Bag</button>
                </div>
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                        {wishlist.map((product) => (
                            <div key={product.id} >
                                <div className="rounded-md relative bg-[#F5F5F5]">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={2000}
                                        height={2000}
                                        className="w-52 h-52 rounded-md py-12 px-10"
                                    />
                                    <button className="absolute top-2 right-2 bg-white rounded-full p-2">
                                        <Image
                                            src="/delete.svg"
                                            alt="delete icon"
                                            width={15}
                                            height={15} />
                                    </button>
                                    <button className="flex justify-center gap-2 absolute bottom-0 w-full bg-black text-[#F5F5F5] py-2 rounded-b-md">
                                        <Image
                                            src="/cartw.svg"
                                            alt="cart icon"
                                            width={25}
                                            height={25} />
                                        Add to Cart
                                    </button>
                                    {product.discount && (
                                        <span className="absolute top-2 left-2 bg-[#DB4444] text-white text-sm px-3 py-1 rounded">
                                            -{product.discount}%
                                        </span>
                                    )}
                                </div>
                                <h3 className="mt-4 text-lg font-medium text-black">
                                    {product.name}
                                </h3>
                                <div className="flex gap-2 mt-2 items-center">
                                    <p className="text-md text-[#DB4444]">
                                        ${product.price}
                                    </p>
                                    {product.originalPrice && (
                                        <p className="text-md text-gray-500 line-through">
                                            ${product.originalPrice}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                        <Image src="/rectangle.svg" alt="Next" width={15} height={15} />
                        <p className="text-black font-medium text-[20px]">Just For You</p>
                    </div>
                    <button className="bg-white text-black border-black border-opacity-50 border-t border-r border-l border-b py-1 px-5 sm:py-3 sm:px-10 rounded-sm sm:block hidden">See All</button>
                </div>

                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                        {wishlist2.map((product) => (
                            <div key={product.id} >
                                <div className="rounded-md relative bg-[#F5F5F5]">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={2000}
                                        height={2000}
                                        className="w-52 h-52 rounded-md py-12 px-10"
                                    />
                                    <button className="absolute top-2 right-2 bg-white rounded-full p-2">
                                        <Image
                                            src="/eye.svg"
                                            alt="eye icon"
                                            width={15}
                                            height={15} />
                                    </button>
                                    <button className="flex justify-center gap-2 absolute bottom-0 w-full bg-black text-[#F5F5F5] py-2 rounded-b-md">
                                        <Image
                                            src="/cartw.svg"
                                            alt="cart icon"
                                            width={25}
                                            height={25} />
                                        Add to Cart
                                    </button>
                                    {product.discount && (
                                        <span className="absolute top-2 left-2 bg-[#DB4444] text-white text-sm px-3 py-1 rounded">
                                            -{product.discount}%
                                        </span>
                                    )}
                                    {product.tag && (
                                        <span className="absolute top-2 left-2 bg-[#00FF66] text-white text-sm px-3 py-1 rounded">
                                            {product.tag}
                                        </span>
                                    )}
                                </div>
                                <h3 className="mt-4 text-lg font-medium text-black">
                                    {product.name}
                                </h3>
                                <div className="flex gap-2 mt-2 items-center">
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

            </div>
        </div>
    )
}