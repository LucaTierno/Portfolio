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
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs, FaReact } from "react-icons/fa";

export const techs = [
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
