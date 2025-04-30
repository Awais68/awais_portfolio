"use client"

import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import Link from "next/link"
import { CiMenuFries } from "react-icons/ci";
import { FaLeaf } from "react-icons/fa6";


const links =[
    {
        name: "home",
        path: "/",
      },
      {
        name: "services",
        path: "/services",
      },
      {
        name: "resume",
        path: "/resume",
      },
      {
        name: "work",
        path: "/work",
      },
      {
        name: "contact",
        path: "/contact",
      },
]


const MobileNav = () => {
    const pathname = usePathname();
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
</SheetTrigger>
<SheetContent className="flex flex-col">
    {/* logo */}
    <div className="mt-32 mb-40 flex justify-center items-center text-2xl">
        <Link href="/">
    <h1 className="text-4xl font-semibold flex  ">
    CodeWithFairy <span className="text-accent mt-2"> <FaLeaf /></span></h1></Link>
    </div>
    {/* NAvbar */}
    <nav className="flex justify-center items-center flex-col gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent hover:border-b-2 transition-all` }
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
</SheetContent>
        </Sheet>
  )
}

export default MobileNav