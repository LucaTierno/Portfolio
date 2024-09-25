"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { SiReaddotcv } from "react-icons/si";

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Proyectos", href: "#" },
  { name: "Contacto", href: "#" },
  { name: "Sobre mí", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-neutral-900 rounded-md lg:hidden"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isOpen ? (
          <IoCloseSharp className="w-6 h-6" />
        ) : (
          <BiMenu className="w-6 h-6" />
        )}
      </button>

      <nav
        className={`
        fixed left-0 top-0 bottom-0 text-neutral-100 lg:text-neutral-600  p-5
        transform transition-transform duration-300 ease-in-out font-medium
        lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}
        z-40
      `}
      >
        <ul className="space-y-4 lg:space-y-28 mt-[70px]">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center font-semibold space-x-3 hover:text-green-500 transition-colors lg:-rotate-90"
              >
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        <ul className="space-y-7 mt-10 lg:mt-[100px]">
          <li>
            <Link
              href="/"
              className="flex items-center lg:justify-center font-semibold space-x-3 hover:text-green-500 transition-colors"
            >
              <SiReaddotcv size={25} />
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center lg:justify-center font-semibold space-x-3 hover:text-green-500 transition-colors"
            >
              <FaGithub size={25} />
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center lg:justify-center font-semibold space-x-3 hover:text-green-500 transition-colors"
            >
              <FaLinkedin size={25} />
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center lg:justify-center font-semibold space-x-3 hover:text-green-500 transition-colors"
            >
              <FaInstagram size={25} />
            </Link>
          </li>
        </ul>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
