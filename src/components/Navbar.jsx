import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi"; 
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#ff008c] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
    
        <a href="#" className="text-3xl font-extrabold text-white tracking-tight">
          Aurea
        </a>

        <button
          className="lg:hidden text-3xl text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <BiX /> : <BiMenu />}
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-8 transition-all duration-300`}
        >
          <ul className="flex flex-col lg:flex-row items-center gap-15 mt-4 lg:mt-0 text-xl font-bold tracking-wide">
            <li>
              <a
                className="text-white hover:text-white/80 transition-colors duration-200"
                href="/">Inicio</a>
            </li>
            <li>
              <a
                className="text-white hover:text-white/80 transition-colors duration-200"
              href="/SobreAurea">Sobre Aurea</a>
            </li>
            <li>
              <a
                className="text-white hover:text-white/80 transition-colors duration-200"
              href="/productos">Productos</a>
            </li>
            <li>
              <a
                className="text-white hover:text-white/80 transition-colors duration-200"
              href="/contacto">Contacto</a>
            </li>
          </ul>

          <div className="flex items-center gap-6 lg:mt-0 text-2xl lg:ml-10">
            <a href="#" id="btnAbrirBienvenida" className="text-white hover:text-white/80">
              <i className="bi bi-person"></i>
            </a>
            <a href="#" className="text-white hover:text-white/80">
              <i className="bi bi-cart"></i>
            </a>
            <a href="#" id="iconPromo" className="text-white hover:text-white/80">
              <i className="bi bi-gift"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}