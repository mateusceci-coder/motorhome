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
      <h2 id="aluguel" className="text-5xl underline text-yellow-500 mb-10">
        Aluguel
      </h2>

      <Carousel className="w-9/12 md:w-full max-w-xl">
        <CarouselContent>
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-1">
                  <h3 className="text-2xl mb-4">Timão</h3>
                  <img
                    src="src/images/motor-5.jpg"
                    alt="motor 1"
                    width={600}
                    className="rounded-3xl"
                  />
                  <div className="mt-5 flex justify-center gap-2">
                    <Button className="bg-yellow-500 hover:bg-yellow-300">
                      Alugar
                    </Button>
                    <Button className="bg-green-500 hover:bg-green-400">
                      Saiba Mais
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-2">
                  <h3 className="text-2xl mb-4">Mingau</h3>
                  <img
                    src="src/images/motor-2.jpg"
                    alt="motor 3"
                    width={500}
                    className="rounded-3xl"
                  />
                  <ul className="md:list-disc flex flex-col gap-2 my-4">
                    <li>
                      <span className="underline">Capacidade:</span> 6 pessoas
                    </li>
                    <li>
                      <span className="underline">Viagens:</span> Nacionais
                    </li>
                    <li>
                      <span className="underline">Preço:</span> R$ 1000/dia
                    </li>
                    <li>
                      <span className="underline">Descrição:</span> Uma cama e
                      cozinha
                    </li>
                  </ul>
                  <Button className="bg-yellow-500 hover:bg-yellow-300">
                    Alugar
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-2">
                  <h3 className="text-2xl mb-4">Açores</h3>
                  <img
                    src="src/images/motor-3.jpeg"
                    alt="motor 3"
                    width={500}
                    className="rounded-3xl"
                  />
                  <ul className="md:list-disc flex flex-col gap-2 my-4">
                    <li>
                      <span className="underline">Capacidade:</span> 4 pessoas
                    </li>
                    <li>
                      <span className="underline">Viagens:</span>Nacionais e
                      internacionais
                    </li>
                    <li>
                      <span className="underline">Preço:</span> R$ 1000/dia
                    </li>
                    <li>
                      <span className="underline">Descrição:</span> banheiro e
                      cama, ótimo espaço!
                    </li>
                  </ul>
                  <Button className="bg-yellow-500 hover:bg-yellow-300">
                    Alugar
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
