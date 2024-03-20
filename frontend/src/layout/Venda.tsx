import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Aluguel() {
  return (
    <section className="flex justify-center items-center flex-col my-12">
      <h2 id="venda" className="text-5xl underline text-yellow-500 mb-10">
        Venda
      </h2>

      <Carousel className="w-9/12 md:w-full max-w-xl">
        <CarouselContent>
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-2">
                  <h3 className="text-2xl mb-4">Lucas</h3>

                  <img
                    src="src/images/motor-6.jpg"
                    alt="motor 1"
                    width={500}
                    className="rounded-3xl"
                  />
                  <ul className="md:list-disc flex flex-col gap-2 my-4">
                    <li>
                      <span className="underline">Capacidade:</span> 4 pessoas
                    </li>
                    <li>
                      <span className="underline">Viagens:</span> Nacionais e
                      internacionais
                    </li>
                    <li>
                      <span className="underline">Preço:</span> R$ 500.000,00
                    </li>
                    <li>
                      <span className="underline">Descrição:</span> Extremamente
                      confortável
                    </li>
                  </ul>
                  <Button className="bg-yellow-500 hover:bg-yellow-300">
                    Comprar
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious />
        </div>
        <div className="hidden md:block">
          <CarouselNext />
        </div>
      </Carousel>
    </section>
  );
}
