import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white text-sm">
      <div className="md:block hidden">
        <div className="grid grid-cols-3 md:justify-items-end items-center px-8 md:px-12 lg:px-32 py-4 text-[#FAFAFA]">
          <div className="lg:col-span-2 md:col-span-3 md:px-32">
            <p>Summer Sale for All Swim Suits and Free Express Delivery - OFF 50%!
              <Link href="#" className="underline font-bold ml-3">ShopNow</Link></p>
          </div>
          <div>
            <select className="bg-black text-[#FAFAFA] outline-none border-none lg:block hidden">
              <option>English</option>
              <option>Urdu</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
