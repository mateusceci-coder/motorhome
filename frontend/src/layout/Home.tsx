import HamburgerMenu from "@/components/HamburguerMenu";
import { navBtn } from "@/interfaces/nav";

export default function Home({ isNavOpen, setIsNavOpen }: navBtn) {
  return (
    <section
      id="home"
      className="bg-no-repeat bg-cover bg-[url('src/images/motorhome-main.jpg')] h-screen relative"
    >
      <nav className="text-white relative z-10 flex justify-between p-10">
        <img
          src="src/images/logo.png"
          alt="logo"
          className="rounded-full"
          width={100}
        />
        <ul className="hidden md:flex gap-10 text-xl ">
          <li className="hover:cursor-pointer hover:underline">
            <a href="#quem-somos">Quem somos</a>
          </li>
          <li className="hover:cursor-pointer hover:underline">
            <a href="#venda">Venda</a>
          </li>
          <li className="hover:cursor-pointer hover:underline">
            <a href="#aluguel">Aluguel</a>
          </li>
        </ul>
        <HamburgerMenu isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <p className="hidden md:inline rounded-xl text-xl p-2 bg-yellow-500">
          (48) 91234-1234
        </p>
      </nav>
      {/* Div de sobreposição para escurecer a imagem de fundo */}
      <div className="absolute inset-0 bg-black opacity-65"></div>
      {/* Conteúdo da seção, colocado dentro de uma div para ficar acima da sobreposição */}
      <div className="relative z-10 text-white p-8 text-center">
        <h1 className="text-5xl md:text-6xl text-yellow-500 font-bold mb-10">
          Princesa Motorhome
        </h1>
        <h2 className="text-2xl">
          Nosso propósito é que você tenha uma experiência incrível e simples.
          Guardada para a vida toda
        </h2>
      </div>
    </section>
  );
}
