import {
  SiJavascript,
  SiNextdotjs,
  SiPrisma,
  SiRailway,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const techs = [
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
