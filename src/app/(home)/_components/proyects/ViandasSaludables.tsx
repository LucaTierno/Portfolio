import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaCarrot, FaNodeJs } from "react-icons/fa";
import { GrFormNextLink } from "react-icons/gr";
import {
  SiJavascript,
  SiNextdotjs,
  SiPrisma,
  SiRailway,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function ViandasSaludables() {
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
    <div className="px-[20px] xl:px-0 text-neutral-900 w-full flex gap-10 flex-wrap-reverse xl:flex-nowrap">
      <div className="w-full xl:w-1/2">
        <div className="flex items-center gap-2">
          <h4 className="font-medium text-2xl">Viandas Saludables</h4>
          <FaCarrot size={25} className="text-orange-400" />
        </div>
        <p className="text-xl text-neutral-600 mt-2 mb-2">
          Desarrollo de Software
        </p>
        <p className="font-medium text-base text-neutral-500">
          En este proyecto trabaje en equipo y desarrollamos por completo un
          software de gestión para un local con más de 100 pedidos semanales.
          Esta aplicación fue creada con el fin de facilitar y organizar los
          procesos de producción de la comida, los clientes, los procesos de
          entrega, gestionar los usuarios habilitados para el manejo de la
          misma, etc. Participando en reuniones con el cliente para definir los
          requerimientos, funcionalidades y el alcance del proyecto.
        </p>
        <div className="mt-4 mb-7">
          <p className="text-xl text-neutral-600 mb-2">Tecnologías</p>
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
        <div className="flex">
          <Link
            href="/proyects/viandas-saludables"
            className="flex text-lg items-center gap-2 bg-neutral-950 text-neutral-200 rounded p-3 font-medium"
          >
            Info Proyecto <GrFormNextLink size={25} />
          </Link>
        </div>
      </div>
      <div className="xl:w-1/2 relative m-auto">
        <Image
          src="/img/viandas-saludables/pc-login.png"
          width={600}
          height={600}
          alt="viandas-saludables-login"
          className="rounded hover:opacity-0 transition-opacity duration-300"
        />
        <Image
          src="/img/viandas-saludables/pc-home.png"
          width={600}
          height={600}
          alt="viandas-saludables-home"
          className="rounded absolute top-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </div>
  );
}
