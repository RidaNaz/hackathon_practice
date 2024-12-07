import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"

export default function MobNav() {
  return (
    <Sheet >
      <SheetTrigger>
        <Image src="/hamburger.svg" alt="Mobile Nav" width={30} height={30} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="pt-12 items-center">

          <SheetTitle>
            <Link href="/" className="cursor-pointer">
              <p className='p-4 hover:bg-[#F7F7F7] rounded-2xl px-16'>Home</p>
            </Link>
          </SheetTitle>
          <SheetTitle>
            <Link href="" className="cursor-pointer">
              <p className='p-4 hover:bg-[#F7F7F7] rounded-2xl px-16'>Contact</p>
            </Link>
          </SheetTitle>
          <SheetTitle>
            <Link href="" className="cursor-pointer">
              <p className='p-4 hover:bg-[#F7F7F7] rounded-2xl px-16'>About</p>
            </Link>
          </SheetTitle>
          <SheetTitle>
            <Link href="" className="cursor-pointer">
              <p className='p-4 hover:bg-[#F7F7F7] rounded-2xl px-16'>Signup</p>
            </Link>
          </SheetTitle>

        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
