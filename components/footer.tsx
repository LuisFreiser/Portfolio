import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";

const footer = () => {
  return (
    <footer className="max-w-3xl mx-auto">
      <div className="md:flex md:justify-between">
        <div>
          <h4 className="text-3xl font-bold my-6 text-center md:my-0">
            S&V Desing Studio
          </h4>
        </div>
        <div className="px-2 flex justify-between md:gap-8 items-center">
          <Link href="#about-me">Sobre Mi</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#services">Servicios</Link>
          <Link href="#portfolio">Portfolio</Link>
          <Link href="#contact">Contacto</Link>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="text-center">&copy; 2024 | S&V Desing Studio</div>
    </footer>
  );
};

export default footer;
