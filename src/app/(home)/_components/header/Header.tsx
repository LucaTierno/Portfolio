import Link from "next/link";
import { BsMouse } from "react-icons/bs";
import { MdOutlineWavingHand } from "react-icons/md";
import { PiHandWithdraw } from "react-icons/pi";
import { SiReaddotcv } from "react-icons/si";

export default function Header() {
  return (
    <header
      id="header"
      className="h-[100vh] flex flex-col justify-center items-center"
    >
      <div className="mb-[100px]">
        <p className="font-bold text-neutral-600 mb-[7px] lg:mb-[10px] text-lg lg:text-xl">
          Hola{" "}
          <MdOutlineWavingHand
            size={60}
            className="inline-block text-green-500 animate-wave"
          />{" "}
          {/* <span className="text-[60px] items-center  inline-block text-green-500 animate-wave">👋</span> */}
          soy Luca Tierno
        </p>
        <h1 className="text-5xl md:text-8xl lg:text-9xl text-neutral-900 flex flex-col font-semibold">
          <span className="bg-green-500 pr-2 text-white">Desarrollador</span>
          <span className="relative">
            Frontend{" "}
            <Link
              href="https://drive.google.com/file/d/1eHQKzcy2l4QEi_6TWn7GAW4YPX-1u-mm/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="absolute bottom-0">
                <SiReaddotcv className="text-neutral-900 mb-[2px] w-6 ml-[26px] md:mb-0 md:w-16 md:ml-7 lg:w-[70px] subtle-bounce" />
              </span>
              <span className="absolute bottom-0 text-neutral-900 text-[9px] ml-[10px] mb-1 md:mb-[6px] md:text-[12px] md:ml-5 lg:text-sm xl:ml-4">
                Descargar CV
              </span>
              <span className="absolute bottom-0 h-[2px] bg-green-500 w-[63px] md:h-1 md:w-[100px] lg:w-[110px] ml-2"></span>
            </Link>
          </span>
        </h1>

        <div className="flex items-center">
          <div className="w-[12px] h-[12px] rounded-full bg-[#1DB954] mr-2 animate-pulseLight"></div>
          <p className="text-neutral-600 font-semibold">
            Disponible para trabajar.
          </p>
        </div>

        <div className="flex items-center justify-center relative">
          <BsMouse
            className="hidden md:flex text-neutral-400 absolute top-[200px] animate-scroll"
            size={40}
          />
          <PiHandWithdraw
            className="md:hidden text-neutral-400 absolute top-[170px] animate-scroll"
            size={30}
          />
        </div>
      </div>
    </header>
  );
}
