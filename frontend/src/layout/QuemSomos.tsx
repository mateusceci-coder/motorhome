export default function QuemSomos() {
  return (
    <section className="flex flex-col items-center justify-center my-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center">
        <div className="flex justify-end mx-auto">
          <img
            id="quem-somos"
            src="src/images/motor-about.jpg"
            alt="motorhome about"
            className="rounded-2xl"
            width={700}
          />
        </div>
        <div className="w-4/5 text-center md:text-start mx-auto">
          <h2 className="underline text-4xl text-yellow-500 mb-4">Quem Somos</h2>
          <p className="mb-8 leading-8 lg:text-lg">
            Bem-vindo à Princesa Motorhome, a sua parada definitiva para
            explorar o mundo com liberdade e conforto através de nossos
            motorhomes de alta qualidade. Desde nossa fundação em 20XX por
            Jéssica, nos dedicamos a proporcionar experiências excepcionais de
            viagem sobre rodas para aventureiros e famílias que valorizam a
            liberdade, a aventura e o conforto de um lar, onde quer que estejam.
            Em Princesa Motorhome, entendemos que cada viagem é uma nova
            história esperando para ser escrita. Por isso, oferecemos uma
            diversidade de motorhomes para compra e aluguel, atendendo a todas
            as necessidades, gostos e tamanhos de grupos. Nossa equipe de
            especialistas apaixonados está aqui para guiar você na escolha do
            veículo ideal, garantindo que sua aventura seja tão confortável
            quanto emocionante.
          </p>
          <p className="text-lg leading-8">
            A Princesa Motorhome é mais do que uma empresa; é uma comunidade de
            entusiastas de viagens que compartilham o amor pela estrada. Seja
            iniciando uma aventura de fim de semana ou embarcando em uma vida
            nômade, estamos aqui para apoiar cada etapa do seu percurso. Explore
            nosso site para descobrir a variedade de opções disponíveis e comece
            a planejar sua próxima grande aventura conosco. Na Princesa
            Motorhome, sua jornada de descoberta começa com o veículo perfeito.
          </p>
        </div>
      </div>
    </section>
  );
}
