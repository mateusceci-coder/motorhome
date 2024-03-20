import Footer from "./layout/Footer";
import Aluguel from "./layout/Aluguel";
import QuemSomos from "./layout/QuemSomos";
import Home from "./layout/Home";
import Venda from "./layout/Venda";
import { useState } from "react";
import NavMenu from "./layout/NavMenu";

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <main className="relative">
      {!isNavOpen ? (
        <>
          <Home isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          <QuemSomos />
          <Aluguel />
          <Venda />
          <Footer />
        </>
      ) : (
        <NavMenu isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      )}
    </main>
  );
}
