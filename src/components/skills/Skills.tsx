import React from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiAstro,
  SiJavascript,
  SiNextdotjs,
  SiPrisma,
  SiRailway,
  SiShadcnui,
  SiTypescript,
} from "react-icons/si";

interface Skill {
  icon: React.ReactNode;
  name: string;
  color: string;
}

const skills: Skill[] = [
  {
    icon: <SiTypescript size={50} className="text-[#3178C6]" />,
    name: "TypeScript",
    color: "hover:text-blue-500",
  },
  {
    icon: <SiJavascript size={50} className="text-[#F7DF1E] bg-black" />,
    name: "JavaScript",
    color: "hover:text-yellow-400",
  },
  {
    icon: <FaReact size={50} className="text-[#61DAFB]" />,
    name: "React",
    color: "hover:text-cyan-400",
  },
  {
    icon: <SiNextdotjs size={50} className="text-black" />,
    name: "Next.js",
    color: "hover:text-black",
  },
  {
    icon: <FaNodeJs size={50} className="text-[#339933]" />,
    name: "Node.js",
    color: "hover:text-green-600",
  },
  {
    icon: <SiPrisma size={50} className="text-[#2D3748]" />,
    name: "Prisma",
    color: "hover:text-indigo-600",
  },
  {
    icon: <RiTailwindCssFill size={50} className="text-[#06B6D4]" />,
    name: "Tailwind CSS",
    color: "hover:text-teal-400",
  },
  {
    icon: <SiAstro size={50} className="text-orange-500" />,
    name: "Astro",
    color: "hover:text-orange-500",
  },
  {
    icon: <SiRailway size={50} className="text-[#0B0D0E]" />,
    name: "Railway",
    color: "hover:text-gray-700",
  },
  {
    icon: <BiLogoPostgresql size={50} className="text-[#336791]" />,
    name: "PostgreSQL",
    color: "hover:text-blue-600",
  },
  {
    icon: <SiShadcnui size={50} className="text-gray-400" />,
    name: "ShadCN UI",
    color: "hover:text-gray-400",
  },
];

export default function Skills() {
  return (
    <div className="text-neutral-900 flex">
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`relative group flex flex-col items-center transition-colors duration-300 ${skill.color}`}
          >
            {skill.icon}
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
