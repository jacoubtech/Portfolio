import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button"

import {FiDownload} from 'react-icons/fi'
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">NextJS Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br/> <span className="text-accent">Fortas Islem</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80"> 
              I excel at crafting elegant digital experience and I am 
              proficient in various programming languages and technologies.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home;