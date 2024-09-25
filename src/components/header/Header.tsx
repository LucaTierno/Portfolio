import { BsMouse } from "react-icons/bs";
import { MdOutlineWavingHand } from "react-icons/md";
import { PiHandWithdraw } from "react-icons/pi";

export default function Header() {
  return (
    <header className="h-[100vh] flex flex-col justify-center items-center">
      <div className="mb-[100px]">
        <p className="font-bold text-neutral-600 mb-[20px] text-lg lg:text-xl ">
          Hola{" "}
          <MdOutlineWavingHand
            size={60}
            className="inline-block text-green-500 animate-wave"
          />{" "}
          soy Luca Tierno
        </p>
        <h1 className="text-5xl md:text-8xl lg:text-9xl text-neutral-900 flex flex-col font-semibold">
          <span className="bg-green-500 pr-2">Desarrollador</span>
          <span className="relative">
            Frontend{" "}
            <span className="absolute bottom-0 h-1 bg-green-500 w-[100px]"></span>
          </span>
        </h1>

        <div className="flex items-center">
          <div className="w-[12px] h-[12px] rounded-full bg-[#1DB954] mr-2 animate-pulseLight"></div>
          <p className="text-neutral-800 font-semibold">
            Disponible para trabajar.
          </p>
        </div>

        <div className="flex items-center justify-center relative">
          <BsMouse
            className="hidden md:flex text-neutral-400 absolute top-[200px] animate-scroll"
            size={40}
          />
          <PiHandWithdraw
            className="md:hidden text-neutral-400 absolute top-[200px] animate-scroll"
            size={30}
          />
        </div>
      </div>
    </header>
  );
}
