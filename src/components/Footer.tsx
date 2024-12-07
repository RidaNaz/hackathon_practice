import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-black text-[#FAFAFA] py-10">
            <div className="px-12 lg:px-24 xl:px-32 mt-10">
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center md:justify-items-start lg:grid-cols-5 gap-10">
                    {/* Exclusive Section */}
                    <div>
                        <h2 className="text-lg font-bold mb-5">Exclusive</h2>
                        <p className="mb-4">Subscribe</p>
                        <p className="text-sm mb-4">
                            Get 10% off your first order
                        </p>

                        <div className="flex text-black relative">
                            <input type="text" placeholder="Enter your email" className="bg-black text-white px-2 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#FAFAFA] " />
                            <Image
                                src="/send.svg"
                                alt="search icon"
                                width={15}
                                height={15}
                                className="absolute right-0 top-1/2 transform -translate-y-1/2" />
                        </div>
                    </div>

                    {/* Support Section */}
                    <div>
                        <h2 className="text-md font-semibold mb-5">Support</h2>
                        <p className="text-sm ">
                            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                        </p>
                        <p className="text-sm mt-4">exclusive@gmail.com</p>
                        <p className="text-sm mt-2">+88015-88888-9999</p>
                    </div>

                    {/* Account Section */}
                    <div className="sm:block hidden">
                        <h2 className="text-lg font-semibold mb-5">Account</h2>
                        <ul className="space-y-2">
                            <li>My Account</li>
                            <li>Login / Register</li>
                            <li>Cart</li>
                            <li>Wishlist</li>
                            <li>Shop</li>
                        </ul>
                    </div>

                    {/* Quick Link Section */}
                    <div className="sm:block hidden">
                        <h2 className="text-lg font-semibold mb-5">Quick Link</h2>
                        <ul className="space-y-2">
                            <li>Privacy Policy</li>
                            <li>Terms Of Use</li>
                            <li>FAQ</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    {/* Download App Section */}
                    <div >
                        <h2 className="text-lg font-semibold mb-5">Download App</h2>
                        <p className="text-sm mb-4">
                            Save $3 with App New User Only
                        </p>
                        <div className="flex gap-2 mb-4 items-center">
                            <Image
                                src="/qrcode.png"
                                alt="QR Code"
                                width={300}
                                height={300}
                                className="w-16 h-16"
                            />
                            <div>
                                <Image
                                    src="/googleplay.png"
                                    alt="Google Play"
                                    width={100}
                                    height={100}
                                    className="mb-2 w-28 h-7"
                                />
                                <Image
                                    src="/appstore.png"
                                    alt="App Store"
                                    width={100}
                                    height={100}
                                    className="w-28 h-7"
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <a href="#">
                                <Image src="/fb.svg" alt="Facebook" width={10} height={10} className="w-6 h-6" />
                            </a>
                            <a href="#">
                                <Image src="/twitter.svg" alt="Twitter" width={10} height={10} className="w-6 h-6" />
                            </a>
                            <a href="#">
                                <Image src="/insta.svg" alt="Instagram" width={10} height={10} className="w-6 h-6" />
                            </a>
                            <a href="#">
                                <Image src="/linkedin.svg" alt="LinkedIn" width={10} height={10} className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-[#FFFFFF] border-opacity-10 border-t mt-10">
            <div className="text-center text-[#FFFFFF] opacity-20 text-sm mt-6 -mb-2">
                © Copyright Rimel 2022. All rights reserved
            </div>
            </div>
        </footer>
    );
};

export default Footer;
