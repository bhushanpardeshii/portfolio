import { Button } from "@/components/ui/button";
import Social from "@/components/social";
import { FiDownload } from "react-icons/fi"
import Photo from "@/components/ui/photo";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Home = () => {
  const words = 'Enthusiastic and motivated recent graduate with a Bachelors degree in Computer Science. Eager to launch a career as a Full Stack Developer. Quick learner with a passion for problem-solving and a commitment to writing clean, efficient code. Adept at collaborating in team environments and excited to contribute to innovative software projects.'
  return (
    <section className="h-full">
      <div className="conatiner mx-2 lg:mx-28 h-full">
        <div className="flex flex-col md:flex-row items-center justify-between
     lg:pt-3 ">
          <div className="text-center md:text-left order-2 lg:order-none">

            <span className="text-lg">
              Software Developer</span>
            <h1 className="h1 mb-6">Hello Im<br />
              <span className="text-accent">Bhushan Pardeshi</span>
            </h1>

            <TextGenerateEffect className="max-w-[650px] mb-9 text-white/80" words={words} />

            <div className="flex flex-col lg:flex-row items-center gap-8">
              <a href="/Bhushan-Pardeshi-Resume.pdf" download>
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-lg" />
                </Button>
              </a>
              <div className="mb-10 lg:mb-0" >
                <Social />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-none lg:mb-0 ml-8 ">
            <Photo />
          </div>
        </div>
      </div>

    </section>
  )

}
export default Home;
