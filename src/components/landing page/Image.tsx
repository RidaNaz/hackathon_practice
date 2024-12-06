import Image from "next/image";

export default function ImageSection() {
  return (
    <section className="mt-36 mb-10 bg-black text-white flex justify-between items-center px-10 py-12 relative">
      {/* Left Content */}
      <div className="z-10">
        <p className="text-[#00FF66] font-semibold text-lg">Categories</p>
        <h1 className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mt-4">
          Enhance Your <br /> Music Experience
        </h1>
        {/* Countdown Timer */}
        <div className="flex gap-5 mt-7 ">
          <div className="text-center bg-white rounded-full md:w-12 lg:w-16 md:h-12 lg:h-16 flex flex-col justify-center items-center text-black md:block hidden">
            <p className="text-md md:text-xl font-semibold lg:mt-3">23</p>
            <p className="text-xs -mt-2">Hours</p>
          </div>
          <div className="text-center bg-white rounded-full md:w-12 lg:w-16 md:h-12 lg:h-16 flex flex-col justify-center items-center text-black md:block hidden">
            <p className="text-md md:text-xl font-semibold lg:mt-3">05</p>
            <p className="text-xs -mt-2">Days</p>
          </div>
          <div className="text-center bg-white rounded-full md:w-12 lg:w-16 md:h-12 lg:h-16 flex flex-col justify-center items-center text-black md:block hidden">
            <p className="text-md md:text-xl font-semibold lg:mt-3">59</p>
            <p className="text-xs -mt-2">Minutes</p>
          </div>
          <div className="text-center bg-white rounded-full md:w-12 lg:w-16 md:h-12 lg:h-16 flex flex-col justify-center items-center text-black md:block hidden">
            <p className="text-md md:text-xl font-semibold lg:mt-3">35</p>
            <p className="text-xs -mt-2">Seconds</p>
          </div>
        </div>

        {/* Button */}
        <button className="bg-[#00FF66] text-white py-2 px-6 lg:py-4 lg:px-12 rounded-md mt-10 hover:bg-green-600">
          Buy Now!
        </button>
      </div>

      {/* Right Content (Image) */}
      <div className="relative w-1/2">
        {/* Blur Image */}
        <div className="absolute inset-0 blur-[100px] opacity-30 z-0">
          <Image
            src="/blur.png" // Replace with your PNG file's path
            alt="Music Speaker Blur"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Main Image */}
        <Image
          src="/speaker.png" // Replace with your PNG file's path
          alt="Music Speaker"
          width={600}
          height={600}
          className="relative z-10"
        />
      </div>
    </section>
  );
}
