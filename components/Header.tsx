import Link from "next/link";
import { Button } from "./ui/button";

// components 
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
        <div className="container mx-auto">Header</div>
        
        <Link href="/">
            <h1 className="text-4xl font-semibold ">
                Islem  
                <span className="text-accent">.</span>
            </h1>
        </Link>
        {/* Desktop nav */}
        <div className="hidden  xl:flex ">
            <Nav />
        </div>
        
    </header>
  )
}

export default Header