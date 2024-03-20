import { navBtn } from '@/interfaces/nav';
import { Menu } from 'lucide-react';


const HamburgerMenu = ({isNavOpen, setIsNavOpen} : navBtn) => {

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div >
      <button onClick={toggleMenu} className="text-4xl md:hidden">
        <Menu color='yellow' />
      </button>
    </div>
  );
};

export default HamburgerMenu;
