import { Link } from 'react-router-dom';
import barcaIcon from '../assets/fcb_logo.png';
import { FiAlignJustify } from "react-icons/fi";
import { GoX } from "react-icons/go";
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(window.innerWidth >= 550);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 550);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 550);
      // si la pantalla es grande, que el menú esté abierto
      if (window.innerWidth >= 550) setOpen(true);
      else setOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // evitar scroll del body cuando el overlay está abierto (mejora UX)
  useEffect(() => {
    if (open && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open, isMobile]);

  // cerrar al click en el fondo
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) setOpen(false);
  };

  return (
    <div className="flex justify-between items-center w-full bg-linear-to-r from-red-700 to-blue-900 h-20 px-10 shadow-md z-20 relative">
      <Link to="/">
        <img
          src={barcaIcon}
          alt="Barça Icon"
          className="w-16 h-16 transition duration-500 hover:scale-110 sm:block"
        />
      </Link>

      {/* Botón hamburguesa solo si la pantalla es pequeña */}
      {isMobile && (
        <button
          onClick={() => setOpen(!open)}
          className="text-white text-xl"
          aria-label="Toggle menu"
        >
          {open ? <GoX /> : <FiAlignJustify />}
        </button>
      )}

      {/* Menú normal para pantallas grandes */}
      {!isMobile && (
        <ul className="flex gap-6">
          <li className="transition duration-1000 hover:scale-110">
            <Link to="/contacto" className="text-white border-2 border-white px-4 py-2 rounded-xl  transition duration-600 hover:bg-linear-to-r hover:from-red-700 hover:to-blue-900 ">Contacto</Link>
          </li>
          <li><Link to="/vitrina" className="text-white transition duration-600 hover:bg-linear-to-r hover:from-red-700 hover:to-blue-900 px-4 py-2 rounded-xl">Vitrina</Link></li>
          <li><Link to="/calendario" className="text-white transition duration-600 hover:bg-linear-to-r hover:from-red-700 hover:to-blue-900 px-4 py-2 rounded-xl">Calendario</Link></li>
        </ul>
      )}

      {/* Overlay FULLSCREEN solo en móvil cuando open === true */}
      {open && isMobile && (
        <div
          className="fixed top-0 left-0 w-full h-screen bg-black/75 backdrop-blur-sm z-40 flex items-center justify-center"
          onClick={handleOverlayClick}
        >
          <nav>
            <ul className="flex flex-col gap-8 text-white text-2xl items-center">
              <li><Link to="/contacto" onClick={() => setOpen(false)}>Contacto</Link></li>
              <li><Link to="/vitrina" onClick={() => setOpen(false)}>Vitrina</Link></li>
              <li><Link to="/calendario" onClick={() => setOpen(false)}>Calendario</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
