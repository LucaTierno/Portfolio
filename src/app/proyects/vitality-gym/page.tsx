import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  SiExpress,
  SiJavascript,
  SiPrisma,
  SiRailway,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ViandaSaludableProject() {
  const projectImages = [
    "/img/vitality-gym/pc-login.png",
    "/img/vitality-gym/pc-exercises.png",
    "/img/vitality-gym/pc-routines.png",
    "/img/vitality-gym/pc-clients.png",
    "/img/vitality-gym/pc-home.png",
    "/img/vitality-gym/pc-calc.png",
    "/img/vitality-gym/pc-home-client.png",
  ];

  const phonesImages = [
    "/img/vitality-gym/phone-calc.png",
    "/img/vitality-gym/phone-home-client.png",
    "/img/vitality-gym/phones-clients.png",
  ];

  const techs = [
    {
      icon: <FaReact size={30} className="text-[#61DAFB]" />,
      name: "React",
    },
    {
      icon: <SiJavascript size={30} className="text-[#F7DF1E] bg-black" />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript size={30} className="text-[#3178C6]" />,
      name: "TypeScript",
    },
    {
      icon: <FaNodeJs size={30} className="text-[#339933]" />,
      name: "Node.js",
    },
    {
      icon: <SiExpress size={30} className="text-[#000000]" />,
      name: "Express",
    },
    {
      icon: <SiZod size={30} className="text-[#2F2F2F]" />,
      name: "Zod",
    },
    {
      icon: <SiTailwindcss size={30} className="text-[#06B6D4]" />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiPrisma size={30} className="text-[#2D3748]" />,
      name: "Prisma",
    },
    {
      icon: <BiLogoPostgresql size={40} className="text-[#336791]" />,
      name: "PostgreSQL",
    },
    {
      icon: <SiRailway size={30} className="text-[#0B0D0E]" />,
      name: "Railway",
    },
    {
      icon: <SiShadcnui size={30} className="text-gray-400" />,
      name: "ShadCN UI",
    },
  ];

  return (
    <>
      <Link
        href={"/"}
        className="z-20 py-1 px-2 mt-2 ml-2 fixed flex text-sm md:text-lg items-center gap-1 md:gap-2 bg-neutral-950 text-neutral-200 rounded md:p-2 font-medium md:mt-5 md:ml-5"
      >
        Volver
        <FaArrowLeftLong className="w-5 md:w-7" />
      </Link>
      <main className="px-[20px] lg:pr-[150px] lg:pl-[250px] py-9 md:py-14">
        <div className="mb-[30px] xl:mb-[50px]">
          <p className="pt-[30px] font-semibold text-sm md:text-lg text-center lg:text-start">
            PROYECTO <span className="text-blue-500">/</span>
          </p>
          <h1 className="flex flex-wrap gap-x-1 md:gap-x-3 items-center justify-center lg:justify-start font-bold text-neutral-900 text-3xl md:text-5xl lg:text-7xl text-center lg:text-start">
            <span>VITALITY</span>
            <span className="flex items-center">
              GYM
              <Dumbbell
                size={65}
                className="ml-1 text-blue-500 text-3xl md:ml-2 md:text-5xl lg:text-7xl"
              />
            </span>
          </h1>
          <p className="mt-1 text-center text-sm md:text-base w-fit m-auto lg:inline-block  lg:text-start bg-blue-500 text-white rounded px-2 py-1 font-bold">
            Desarrollo de Software
          </p>
        </div>

        <div className="mb-7 max-w-6xl">
          <h2 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2 text-neutral-900">
            Descripción del Proyecto<span className="text-blue-500">.</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-500">
            Esta aplicación web facilita la administración de clientes, planes
            de entrenamiento, rutinas personalizadas y el seguimiento del
            progreso de los usuarios, optimizando el tiempo de los entrenadores
            y mejorando la experiencia para los clientes. Tambien los clientes
            cuentan con una calculadora saludable para calcular sus macros
            diarios.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row">
          <div className="w-full xl:w-1/2">
            <div className="mb-7">
              <h3 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2">
                Características Principales
                <span className="text-blue-500">.</span>
              </h3>

              <ul className="list-disc list-inside space-y-1 md:space-y-2 text-neutral-500 text-base md:text-lg">
                <li>
                  Gestión de clientes, planes de entrenamiento, rutinas y
                  ejercicios
                </li>
                <li>
                  Calculadora de salud para medir el IMC, calorías y proteínas
                </li>
                <li>Impresión de rutinas para los clientes</li>
                <li>
                  Diseño optimizado para dispositivos móviles, ideal para su uso
                  en el gimnasio
                </li>
                <li>Interfaz intuitiva para entrenadores y clientes</li>
              </ul>
            </div>

            <div className="mb-7">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                Tecnologías<span className="text-blue-500">.</span>
              </h3>
              <div className="flex gap-2 items-center justify-between sm:justify-start w-full overflow-x-auto">
                {techs.map((tech, index) => (
                  <div key={index} className="relative group flex-shrink-0">
                    {tech.icon}
                    <span
                      className="
          absolute top-[-35px] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100
          transition-opacity duration-300 whitespace-nowrap"
                      style={{ color: tech.icon.props.className }}
                    >
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="">
              <h2 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2">
                Proceso de Desarrollo<span className="text-blue-500">.</span>
              </h2>
              <p className="text-base md:text-lg mb-1 md:mb-2 text-neutral-500">
                El desarrollo de este proyecto se llevó a cabo en varias etapas:
              </p>
              <ol className="list-decimal list-inside text-base md:text-lg space-y-1 md:space-y-2 text-neutral-500">
                <li>Análisis de requisitos y planificación</li>
                <li>Diseño de la arquitectura y la base de datos</li>
                <li>Desarrollo del backend con Prisma y PostgreSQL</li>
                <li>Creación de la interfaz de usuario con React y Next.js</li>
                <li>Conexión medienate Axios</li>
                <li>Pruebas y optimización</li>
                <li>Despliegue y capacitación del cliente</li>
              </ol>
            </div>
          </div>

          <div className="w-full xl:w-1/2 z-10">
            <Carousel className="w-full m-auto max-w-xl">
              <CarouselContent>
                {projectImages.map((img, index) => (
                  <CarouselItem key={index}>
                    <Card className="bg-slate-50 border-none shadow-none">
                      <CardContent className="p-0 flex items-center justify-center">
                        <div className="relative aspect-square w-full">
                          <Image
                            src={img}
                            alt={`Captura de pantalla ${
                              index + 1
                            } del proyecto de viandas saludables`}
                            fill
                            className="object-contain rounded-lg"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white hover:text-white" />
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white hover:text-white" />
            </Carousel>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2">
                Equipo de Trabajo<span className="text-blue-500">.</span>
              </h2>
              <p className="text-base md:text-lg mb-1 md:mb-2 text-neutral-500">
                El equipo de desarrollo esta compuesto por:
              </p>
              <ul className="list-disc list-inside text-base md:text-lg space-y-2 text-neutral-500">
                <li>2 - Desarrolladores Full Stack</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse xl:flex-row">
          <Carousel className="w-full m-auto max-w-xl">
            <CarouselContent>
              {phonesImages.map((img, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-slate-50 border-none shadow-none">
                    <CardContent className="p-0 flex items-center justify-center">
                      <div className="relative aspect-square w-full">
                        <Image
                          src={img}
                          alt={`Captura de pantalla ${
                            index + 1
                          } del proyecto de viandas saludables`}
                          fill
                          className="object-contain rounded-lg"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white hover:text-white" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white hover:text-white" />
          </Carousel>

          <div className="xl:w-1/2 mt-[25px] xl:mt-[100px] xl:ml-5">
            <h3 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2">
              Vista del cliente
              <span className="text-blue-500">.</span>
            </h3>
            <p className="text-base md:text-lg text-neutral-500 xl:w-[80%]">
              La aplicación fue diseñada con una interfaz moderna, amigable y
              fácil de usar, especialmente optimizada para dispositivos móviles.
              Esto permite a los usuarios disfrutar de una experiencia fluida y
              eficiente, asegurando que puedan acceder rápidamente a todos sus
              ejercicios en las sesiones de entrenamiento.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="xl:w-1/2">
            <h3 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2">
              Impresión de rutinas<span className="text-blue-500">.</span>
            </h3>
            <p className="text-base md:text-lg text-neutral-500">
              La aplicación permite a los entrenadores imprimir rutinas de
              entrenamiento personalizadas para sus clientes. Esto facilita la
              comunicación entre el entrenador y el cliente, y garantiza que los
              ejercicios se realicen correctamente.
            </p>
            <div className="flex flex-col justify-center items-center">
              <div className="m-auto mt-[20px]">
                <Image
                  alt="routine-pdf"
                  src="/img/vitality-gym/routine.png"
                  width={200}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <a href="/img/vitality-gym/routine.png" download="routine.png">
                <Button className="rounded bg-blue-500 hover:bg-blue-600 mt-3">
                  Download
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
