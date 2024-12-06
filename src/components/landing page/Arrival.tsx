import Image from "next/image";

export default function NewArrival() {
    return (
        <section className="mt-36 mb-32">
            <div className="flex gap-3 items-center mb-4">
                <Image src="/rectangle.svg" alt="Next" width={15} height={15} />
                <p className="text-[#DB4444] font-semibold text-sm">Featured</p>
            </div>

            <div className="flex justify-between items-center mb-12">
                <h2 className="text-4xl font-semibold text-black">
                    New Arrival
                </h2>
            </div>


            <div className="grid sm:grid-cols-2 gap-8">
                <div>
                    <Image src="/frame1.jpg" alt="Next" width={700} height={700} />
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div className="col-span-2 justify-between">
                        <Image src="/frame2.jpg" alt="Next" width={800} height={800} /></div>
                    <div>
                        <Image src="/frame3.jpg" alt="Next" width={500} height={500} />
                    </div>
                    <div>
                        <Image src="/frame4.jpg" alt="Next" width={500} height={500} />
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-evenly text-black">
                <div className="flex flex-col gap-2 items-center">
                    <div className="mt-36 mb-3">
                        <Image src="/bg.svg" alt="Next" width={80} height={80} className="relative" />
                        <Image src="/delivery.svg" alt="Next" width={40} height={40} className="absolute -mt-[60px] ml-5" />
                    </div>
                    <h1 className="text-[13px] sm:text-[18px] md:text-[20px] font-semibold">FREE AND FAST DELIVERY</h1>
                    <p className="text-[10px] sm:text-[14px]">Free delivery for all orders over $140</p>
                </div>

                <div className="flex flex-col gap-2 items-center">
                    <div className="mt-36 mb-3">
                        <Image src="/bg.svg" alt="Next" width={80} height={80} className="relative" />
                        <Image src="/service.svg" alt="Next" width={40} height={40} className="absolute -mt-[60px] ml-5" />
                    </div>
                    <h1 className="text-[13px] sm:text-[18px] md:text-[20px] font-semibold">24/7 CUSTOMER SERVICE</h1>
                    <p className="text-[10px] sm:text-[14px]">Friendly 24/7 customer support</p>
                </div>

                <div className="flex flex-col gap-2 items-center">
                    <div className="mt-36 mb-3">
                        <Image src="/bg.svg" alt="Next" width={80} height={80} className="relative" />
                        <Image src="/tick.svg" alt="Next" width={40} height={40} className="absolute -mt-[60px] ml-5" />
                    </div>
                    <h1 className="text-[13px] sm:text-[18px] md:text-[20px] font-semibold">MONEY BACK GUARANTEE</h1>
                    <p className="text-[10px] sm:text-[14px]">We reurn money within 30 days</p>
                </div>
            </div>
        </section>
    )
}