export default function AboutMe() {
  return (
    <div className="px-[20px] xl:px-0 text-neutral-900 flex flex-col w-full xl:w-1/2">
      <div className="flex items-center gap-2">
        <h4 className="font-medium text-xl md:text-xl">
          Hola{" "}
          <p className="text-[30px]  inline-block text-green-500 animate-wave">
            👋
          </p>
        </h4>
      </div>
      <p className="font-medium text-base md:text-lg mt-1 text-neutral-500">
        Mi nombre es{" "}
        <span className="text-neutral-700">
          Luca Tierno y soy Full Stack Developer,
        </span>{" "}
        me encargo de crear aplicaciones web dinámicas, funcionales y centradas
        en el usuario. Tengo experiencia trabajando con tecnologías modernas
        como{" "}
        <span className="text-neutral-700">
          React, Next.js, Typescript, Prisma, PostgreSQL y más.
        </span>{" "}
        Actualmente, desarrollo proyectos que combinan diseño intuitivo con
        experiencia de usuario optimizada, manteniendo siempre un enfoque en la
        calidad del código y las mejores prácticas de desarrollo. Además de mi
        especialización en <span className="text-neutral-700">Frontend</span>,
        también estoy expandiendo mis habilidades en{" "}
        <span className="text-neutral-700">Backend</span>, buscando siempre
        nuevas oportunidades para aprender y colaborar en proyectos Open Source.
      </p>
    </div>
  );
}
