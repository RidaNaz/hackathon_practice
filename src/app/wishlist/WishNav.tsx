import Image from "next/image";
import Link from "next/link";

export default function WishNav() {
  return (
    <header className="bg-black text-white text-sm border-b">
      <div className="flex justify-between items-center px-12 lg:px-32 pt-7 pb-3 bg-white text-black">
        <h1 className="text-2xl font-bold">Exclusive</h1>
        <nav className="flex space-x-16 text-md md:block hidden">
          <Link href="/" className="hover:border-b border-b-black">Home</Link>
          <Link href="#" className="hover:border-b border-b-black">Contact</Link>
          <Link href="#" className="hover:border-b border-b-black">About</Link>
          <Link href="#" className="hover:border-b border-b-black">Sign Up</Link>
        </nav>
        <div className="flex items-center space-x-4">

          <div className="flex text-black relative lg:block hidden">
            <input type="text" placeholder="What are you looking for?" className="bg-[#F5F5F5] text-black pl-3 pr-12 py-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-gray-500" />
            <Image
              src="/search.svg"
              alt="search icon"
              width={15}
              height={15}
              className="absolute right-3 top-1/2 transform -translate-y-1/2" />
          </div>
          <div className="md:block hidden">
            <div className="flex items-center gap-5">
              <Link href="/wishlist" className="text-black">
                <Image
                  src="/heart4.svg"
                  alt="heart icon"
                  width={27}
                  height={27} />
              </Link>
              <Link href="/cart" className="text-black">
                <Image
                  src="/cart.svg"
                  alt="cart icon"
                  width={25}
                  height={25} />
              </Link>
              <Link href="#" className="text-black">
                <Image
                  src="/user.svg"
                  alt="user icon"
                  width={27}
                  height={27} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
