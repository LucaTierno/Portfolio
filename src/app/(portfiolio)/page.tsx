import AboutMe from "@/components/aboutMe/AboutMe";
import Header from "@/components/header/Header";
import ViandasSaludables from "@/components/proyects/ViandasSaludables";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main className="lg:pr-[100px] lg:pl-[250px]">
        <section className="">
          <h3 className="mb-[20px] xl:mb-[100px] font-bold text-neutral-900 text-3xl md:text-5xl lg:text-7xl text-center xl:text-start">
            PROYECTOS<span className="text-green-500">.</span>
          </h3>
          <ViandasSaludables />
        </section>

        <section className="">
          <h3 className="mt-[100px] mb-[20px] xl:mb-[100px] font-bold text-neutral-900 text-3xl md:text-5xl lg:text-7xl text-center xl:text-start">
            TECNOLOGÍAS<span className="text-green-500">.</span>
          </h3>
          <Skills />
        </section>

        <section className="">
          <h3 className="mt-[100px] mb-[20px] xl:mb-[30px] font-bold text-neutral-900 text-3xl md:text-5xl lg:text-7xl text-center xl:text-start">
            ACERCA DE MI<span className="text-green-500">.</span>
          </h3>
          <AboutMe />
        </section>
      </main>
      <footer className="text-center py-16">
        <p className="text-neutral-500 font-medium">
          <span className="font-semibold">©</span> 2024 Luca Tierno.
        </p>
      </footer>
    </>
  );
}
