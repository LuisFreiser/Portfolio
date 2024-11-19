import { dataAboutMe, dataSlider } from "@/data";
import Image from "next/image";
import Link from "next/link";
import Title from "./shared/title";
import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

const AboutMe = () => {
  return (
    <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto" id="about-me">
      <Title title="Acerca de Nosotros" subtitle="Conócenos" />
      <div className="grid md:grid-cols-2">
        <div className="py-12 md:py-0 flex items-center justify-center">
          <Carousel
            opts={{ align: "start" }}
            orientation="vertical"
            className="w-full max-w-xs h-fit"
          >
            <CarouselContent className="mt-1 h-[200px]">
              {dataSlider.map((data) => (
                <CarouselItem key={data.id}>
                  <div className="flex items-center justify-center">
                    <Image
                      src={data.url}
                      alt="Image"
                      width={250}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div>
          <div className="grid md:grid-cols-3 mt-7 gap-4">
            {dataAboutMe.map((data) => (
              <div
                key={data.id}
                className="border border-white-10 rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800"
              >
                {data.icon}
                <p className="my-2">{data.name}</p>
                <p className="text-gray-400">{data.description}</p>
              </div>
            ))}
          </div>
          <p className="my-8">
            Somos un estudio de diseño y desarrollo de sitios web enfocado en
            crear soluciones visuales y funcionales que representen la identidad
            única de cada cliente. Desde la creación de sitios modernos y
            responsivos hasta la optimización de la experiencia de usuario,
            trabajamos contigo en cada paso del proceso. Nuestro equipo se
            dedica a fusionar creatividad y tecnología para que tu marca
            destaque en el entorno digital. Descubre cómo podemos ayudarte a
            construir un sitio web que no solo se vea bien, sino que también
            impulse tu negocio.
          </p>
          <Button>
            <Phone size={20} className="mr-2" />
            <Link href="tel:+34677666633">Contáctanos</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
