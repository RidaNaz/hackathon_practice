import Image from "next/image";
import CartNav from "./CartNav";


export default function Cart() {
    return (
        <div>
            <CartNav />
            <div className="px-8 md:px-12 lg:px-24 xl:px-32 mb-36 mt-16">
                {/* Breadcrumb */}
                <div className="mb-6 text-sm text-black">
                    <span>Home</span> / <span className="font-bold">Cart</span>
                </div>

                {/* Cart Table */}
                <div className="rounded-lg overflow-hidden mt-16">
                    <table className="w-full ">
                        <thead>
                            <tr className="bg-white shadow-sm font-medium text-left text-black">
                                <th className="p-4">Product</th>
                                <th className="p-4">Price</th>
                                <th className="p-4">Quantity</th>
                                <th className="p-4">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody className="text-black">
                            {/* Product Row 1 */}
                            <tr className="shadow-sm">
                                <td className="p-4 flex items-center">
                                    <Image
                                        src="/p3.png" // Replace with your product image URL
                                        alt="LCD Monitor"
                                        width={100}
                                        height={100}
                                        className="w-16 h-16 object-cover mr-4"
                                    />
                                    <span>LCD Monitor</span>
                                </td>
                                <td className="p-4">$650</td>
                                <td className="p-4">
                                    <select className="border rounded px-2 py-1">
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </select>
                                </td>
                                <td className="p-4">$650</td>
                            </tr>
                            {/* Product Row 2 */}
                            <tr className="shadow-sm">
                                <td className="p-4 flex items-center">
                                    <Image
                                        src="/p1.png" // Replace with your product image URL
                                        alt="Hi Gamepad"
                                        width={100}
                                        height={100}
                                        className="w-12 h-12 object-cover mr-4"
                                    />
                                    <span>Hi Gamepad</span>
                                </td>
                                <td className="p-4">$550</td>
                                <td className="p-4">
                                    <select className=" rounded px-2 py-1">
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </select>
                                </td>
                                <td className="p-4">$1100</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Actions */}
                    <div className="flex justify-between p-4 text-black mt-2">
                        <button className="px-12 py-3 border border-gray-300 bg-white rounded hover:bg-gray-300">
                            Return To Shop
                        </button>
                        <button className="px-12 py-3 border border-gray-300 bg-white rounded hover:bg-gray-300">
                            Update Cart
                        </button>
                    </div>
                </div>

                {/* Coupon & Cart Total */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    {/* Coupon Section */}
                    <div className="flex items-center space-x-4 p-4 rounded-lg">
                        <input
                            type="text"
                            placeholder="Coupon Code"
                            className="flex-1 border border-black rounded px-4 py-3 "
                        />
                        <button className="px-8 py-3 bg-[#DB4444] text-white rounded hover:bg-red-600">
                            Apply Coupon
                        </button>
                    </div>

                    {/* Cart Total Section */}
                    <div className="border border-black rounded-md text-black p-4">
                        <h2 className="text-[20px] mb-4">Cart Total</h2>
                        <div className="flex justify-between py-2">
                            <span>Subtotal:</span>
                            <span>$1750</span>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between py-2">
                            <span>Shipping:</span>
                            <span>Free</span>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between py-2">
                            <span>Total:</span>
                            <span>$1750</span>
                        </div>
                        <button className="w-fit mt-4 px-12 py-3 bg-[#DB4444] text-white rounded hover:bg-red-600 ">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}