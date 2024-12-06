import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white text-sm">
      <div className="sm:block hidden">
        <div className="flex justify-center items-center px-12 lg:px-32 py-4 text-[#FAFAFA]">
          <div>
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
