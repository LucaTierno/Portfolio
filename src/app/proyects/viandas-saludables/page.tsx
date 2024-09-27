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
  SiJavascript,
  SiNextdotjs,
  SiPrisma,
  SiRailway,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaCarrot, FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function ViandaSaludableProject() {
  const projectImages = [
    "/img/viandas-saludables/pc-login.png",
    "/img/viandas-saludables/pc-panel-control.png",
    "/img/viandas-saludables/pc-dishes.png",
    "/img/viandas-saludables/pc-menus.png",
    "/img/viandas-saludables/pc-delivery.png",
    "/img/viandas-saludables/pc-clients.png",
    "/img/viandas-saludables/pc-ingredients.png",
    "/img/viandas-saludables/pc-list-buy.png",
    "/img/viandas-saludables/pc-home.png",
  ];

  const techs = [
    { icon: <SiNextdotjs size={30} className="text-black" />, name: "Next.js" },
    {
      icon: <SiJavascript size={30} className="text-[#F7DF1E] bg-black" />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript size={30} className="text-[#3178C6]" />,
      name: "TypeScript",
    },
    { icon: <SiPrisma size={30} className="text-[#2D3748]" />, name: "Prisma" },
    {
      icon: <FaNodeJs size={30} className="text-[#339933]" />,
      name: "Node.js",
    },
    {
      icon: <SiTailwindcss size={30} className="text-[#06B6D4]" />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiRailway size={30} className="text-[#0B0D0E]" />,
      name: "Railway",
    },
    {
      icon: <BiLogoPostgresql size={40} className="text-[#336791]" />,
      name: "PostgreSQL",
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
        className="z-20 py-1 px-2 mt-2 ml-2 fixed flex text-sm md:text-lg items-center gap-1 md:gap-2 bg-neutral-950 text-neutral-200 rounded md:p-3 font-medium md:mt-5 md:ml-5"
      >
        Volver
        <FaArrowLeftLong className="w-5 md:w-7" />
      </Link>
      <main className="px-[20px] lg:pr-[100px] lg:pl-[250px] py-14">
        <div className="mb-[30px] xl:mb-[50px]">
          <p className="pt-[30px] font-semibold text-sm md:text-lg text-center lg:text-start">
            PROYECTO <span className="text-green-500">/</span>
          </p>
          <h1 className="flex flex-wrap gap-x-1 md:gap-x-3 items-center justify-center lg:justify-start font-bold text-neutral-900 text-3xl md:text-5xl lg:text-7xl text-center lg:text-start">
            <span>VIANDAS</span>
            <span className="flex items-center">
              SALUDABLES
              <FaCarrot className="ml-1 text-orange-400 text-3xl md:ml-2 md:text-5xl lg:text-7xl" />
            </span>
          </h1>
            <p className="mt-1 text-center text-sm md:text-base w-fit m-auto lg:inline-block  lg:text-start bg-blue-500 text-white rounded px-2 py-1 font-bold">
              Desarrollo de Software
            </p>
        </div>

        <div className="mb-7 max-w-6xl">
          <h2 className="text-2xl font-semibold mb-1 md:mb-2 text-neutral-900">
            Descripción del Proyecto<span className="text-green-500">.</span>
          </h2>
          <p className="text-lg text-neutral-500">
            Desarrollé un sistema de gestión integral para un local de viandas
            saludables. Esta aplicación web permite a los propietarios
            administrar pedidos, clientes, ususarios, inventario, y entregas de
            manera eficiente, mejorando significativamente sus operaciones
            diarias.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row">
          <div className="w-full xl:w-1/2">
            <div className="mb-7">
              <h3 className="text-2xl font-semibold mb-1 md:mb-2">
                Características Principales
                <span className="text-green-500">.</span>
              </h3>

              <ul className="list-disc list-inside text-lg space-y-2 text-neutral-500">
                <li> Gestión de pedidos en tiempo real</li>
                <li>Sistema de inventario </li>
                <li>Planificación de rutas de entrega optimizadas</li>
                <li>Panel de control para análisis de ventas y tendencias</li>
                <li>Interfaz de usuario intuitiva y responsive</li>
              </ul>
            </div>

            <div className="mb-7">
              <h3 className="text-2xl font-semibold mb-3">
                Tecnologías<span className="text-green-500">.</span>
              </h3>
              <div className="flex gap-2 items-center justify-between sm:justify-start ">
                {techs.map((tech, index) => (
                  <div key={index} className="relative group">
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
              <h2 className="text-2xl font-semibold mb-1 md:mb-2">
                Proceso de Desarrollo<span className="text-green-500">.</span>
              </h2>
              <p className="text-lg mb-1 md:mb-2 text-neutral-500">
                El desarrollo de este proyecto se llevó a cabo en varias etapas:
              </p>
              <ol className="list-decimal list-inside text-lg space-y-2 text-neutral-500">
                <li>Análisis de requisitos y planificación</li>
                <li>Diseño de la arquitectura y la base de datos</li>
                <li>Desarrollo del backend con Prisma y PostgreSQL</li>
                <li>Creación de la interfaz de usuario con React y Next.js</li>
                <li>Implementación de funcionalidades clave</li>
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
              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white hover:text-white" />
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white hover:text-white" />
            </Carousel>
            <div className="">
              <h2 className="text-2xl font-semibold mb-1 md:mb-2">
                Equipo de Trabajo<span className="text-green-500">.</span>
              </h2>
              <p className="text-lg mb-1 md:mb-2 text-neutral-500">
                El equipo de desarrollo esta compuesto por:
              </p>
              <ul className="list-disc list-inside text-lg space-y-2 text-neutral-500">
                <li>2 - Desarrolladores Full Stack</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
