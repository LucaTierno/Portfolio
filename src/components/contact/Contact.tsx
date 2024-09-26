import { FaArrowLeftLong } from "react-icons/fa6";
import { MdSubdirectoryArrowLeft } from "react-icons/md";
import { TbMail } from "react-icons/tb";

export default function Contact() {
  const email = "lucatiernoboca@gmail.com";

  return (
    <div className="max-w-3xl">
      <p className="font-medium text-lg text-neutral-500">
        Buscando oportunidades que me permitan aportar mi experiencia y seguir
        aprendiendo en el proceso.
      </p>
      <div className="mt-6">
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <TbMail className="mr-2 h-5 w-5" aria-hidden="true" />
          {email}
        </a>
      </div>
      <div className="mt-7">
        <p className="font-medium text-lg text-neutral-500">También puedes contactarme por</p>
        <MdSubdirectoryArrowLeft size={50} className=" text-neutral-600" />
      </div>
    </div>
  );
}
