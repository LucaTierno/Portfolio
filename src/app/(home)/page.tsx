import Navbar from "@/components/navigation/Navbar";
import AboutMe from "./_components/aboutMe/AboutMe";
import Contact from "./_components/contact/Contact";
import Header from "./_components/header/Header";
import ViandasSaludables from "./_components/proyects/ViandasSaludables";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <main className="lg:pr-[100px] lg:pl-[250px]">
        <section className="" id="proyects">
          <h3 className="pt-[70px] mb-[20px] xl:mb-[50px] font-bold text-neutral-900 text-3xl md:text-5xl lg:text-7xl text-center xl:text-start">
            PROYECTOS<span className="text-green-500">.</span>
          </h3>
          <ViandasSaludables />
        </section>

        <section className="mb-[50px]" id="aboutMe">
          <h3 className="pt-[70px] mt-[100px] mb-[20px] xl:mb-[50px] font-bold text-neutral-900 text-3xl md:text-5xl lg:text-7xl text-center xl:text-start">
            SOBRE MÍ<span className="text-green-500">.</span>
          </h3>
          <AboutMe />
        </section>

        <section className="mb-[50px]" id="contact">
          <h3 className="pt-[70px] mt-[100px] mb-[20px] xl:mb-[50px] font-bold text-neutral-900 text-3xl md:text-5xl lg:text-7xl text-center xl:text-start">
            CONTACTO<span className="text-green-500">.</span>
          </h3>
          <Contact />
        </section>
      </main>
    </>
  );
}
