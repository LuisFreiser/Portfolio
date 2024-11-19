import { dataTestimonials } from "@/data";
import Title from "./shared/title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Testimonials = () => {
  return (
    <div className="p-4 md:px-12 md:py-44 max-w-5xl mx-auto">
      <Title title="Testimonios" subtitle="Review de nuestros clientes" />

      <Carousel className="mx-10 mt-6">
        <CarouselContent className="gap-8">
          {dataTestimonials.map((data) => (
            <CarouselItem
              key={data.id}
              className="md:basis-1/3 p-4 text-center flex flex-col items-center border-slate-400 border-2 rounded-lg"
            >
              <Avatar>
                <AvatarImage src={data.imageUrl} alt="Profile Avatar" />
                {/* Si no esta el avatar se usa el fallback */}
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="mt-4">{data.description}</p>
                <p className="min-h-12 text-2xl mt-4">{data.name}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Testimonials;
