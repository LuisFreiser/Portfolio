import { Mail, Paperclip } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/container";

export default function Introduction() {
  return (
    <Container>
      <div className="text-center mt-3 id:home">
        <h3 className="text-xl mb-2">Hello, We are</h3>
        <h1 className="text-4xl font-bold mb-3">S&V Desing Studio</h1>
        <h2 className="text-2xl text-gray-400">Frontend Developer</h2>
        <div className="flex items-center">
          <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
            <Link className={buttonVariants()} href="#contact">
              {/* Llamando a los iconos de lucide React */}
              <Mail className="mr-2" /> Contáctanos
            </Link>
            <Link
              className={buttonVariants({ variant: "secondary" })}
              href="/cv-tarre.pdf"
              target="_blank" // Abre el enlace en una nueva pestaña
              rel="noopener noreferrer" // Maneja la seguridad y eficiencia del sitio
            >
              {/* Llamando a los iconos de lucide React */}
              <Paperclip className="mr-2" /> Descargar CV
            </Link>
          </div>
        </div>
        <Image
          src="/profile.png"
          alt="Profile Picture"
          width={500}
          height={500}
        />
      </div>
    </Container>
  );
}
