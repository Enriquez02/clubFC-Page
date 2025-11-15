//NAVBAR DE LA PAGINA 
import { Link } from 'react-router-dom';
import barcaIcon from '../assets/fcb_logo.png';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full  bg-linear-to-r from-red-700 to-blue-900 h-20 px-10 shadow-md z-20">
 
      <Link
      to="/">
         <img src={barcaIcon} alt="Barça Icon" 
      className="w-16 h-16 transition duration-500 hover:scale-110 hidden sm:block" 

      /> </Link>

      <ul className="flex gap-6 ">
        <li className='transition duration- 1000 hover:scale-110'>
          <Link
            to="/contacto"
          className="
    text-white border-2 border-white px-4 py-2 rounded-xl
    transition-all duration-300 hover:bg-linear-to-r hover:from-red-700 hover:to-blue-900 hover:border-red-500"
>
            Contacto
          </Link>
        </li>
        <li>
          <Link
            to="/vitrina"
            className="text-white transition duration-600 hover:bg-linear-to-r hover:from-red-700 hover:to-blue-900 px-4 py-2 rounded-xl"
          >
            Vitrina
          </Link>
        </li>
        <li>
          <Link
            to="/calendario"
            className="text-white transition duration-600 hover:bg-linear-to-r hover:from-red-700 hover:to-blue-900 px-4 py-2 rounded-xl"
          >
            Calendario
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
