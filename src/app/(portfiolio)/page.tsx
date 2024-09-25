import AboutMe from "@/components/aboutMe/AboutMe";
import Header from "@/components/header/Header";
import ViandasSaludables from "@/components/proyects/ViandasSaludables";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main className="lg:pr-[100px] lg:pl-[250px]">
        <h3 className="mb-[20px] xl:mb-[100px] font-bold text-neutral-900 text-3xl md:text-5xl lg:text-7xl text-center xl:text-start">
          PROYECTOS<span className="text-green-500">.</span>
        </h3>
        <ViandasSaludables />

        <h3 className="mt-[100px] mb-[20px] xl:mb-[100px] font-bold text-neutral-900 text-3xl md:text-5xl lg:text-7xl text-center xl:text-start">
          TECNOLOGÍAS<span className="text-green-500">.</span>
        </h3>
        <Skills />

        <h3 className="mt-[100px] mb-[20px] xl:mb-[100px] font-bold text-neutral-900 text-3xl md:text-5xl lg:text-7xl text-center xl:text-start">
          ACERCA DE MI<span className="text-green-500">.</span>
        </h3>
        <AboutMe />
      </main>
    </>
  );
}
