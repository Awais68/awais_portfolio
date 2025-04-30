import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { VscAzure } from "react-icons/vsc";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">

          <h1 className="text-2xl justify-center items-end font-semibold flex  ">
            <span className="text-accent mt-2 text-4xl"> <VscAzure /></span>
            &nbsp;
            AS Developers </h1></Link>

        {/*desktop nav hire button  */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire Me</Button></Link>
        </div>

        {/* mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>


      </div>
    </header>
  )
}

export default Header