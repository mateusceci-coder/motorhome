import { Button } from "@/components/ui/button";
import { navBtn } from "@/interfaces/nav";
import { X } from "lucide-react";

export default function NavMenu({ isNavOpen, setIsNavOpen }: navBtn) {
  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const animationClass = isNavOpen ? "animate-slideIn" : "animate-slideOut";

  return (
    <div
      className={`flex flex-col items-center justify-center absolute top-0 right-0 w-full h-screen bg-gray-100 text-black p-4 transition-opacity duration-500 ${
        isNavOpen ? "opacity-100" : "opacity-0"
      } ${animationClass}`}
    >
      <div>
        <X className="fixed top-16" size={48} onClick={handleNav} />
      </div>
      <div className="flex gap-3">
        <Button>Login</Button>
        <Button>Criar conta</Button>
      </div>
      <ul className="text-center mt-16">
        <li
          className="text-xl mb-8 hover:cursor-pointer hover:underline"
          onClick={handleNav}
        >
          <a href="#home">Home</a>
        </li>
        <li
          className="text-xl mb-8 hover:cursor-pointer hover:underline"
          onClick={handleNav}
        >
          <a href="#quem-somos">Quem Somos</a>
        </li>
        <li
          className="text-xl mb-8 hover:cursor-pointer hover:underline"
          onClick={handleNav}
        >
          <a href="#aluguel">Aluguel</a>
        </li>
        <li
          className="text-xl mb-20 hover:cursor-pointer hover:underline"
          onClick={handleNav}
        >
          <a href="#venda">Venda</a>
        </li>
        <li className="text-3xl p-6 bg-yellow-500 rounded-2xl text-white">
          (48) 99912-1823
        </li>
      </ul>
    </div>
  );
}
