import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const getLinkClass = (path) => {
    return `text-white font-medium transition-all duration-300 ${
      isActive(path) 
        ? 'border-b-2 border-blue-400 text-blue-400' 
        : 'hover:text-blue-400 hover:border-b-2 hover:border-blue-400'
    }`;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-black bg-opacity-30 backdrop-blur-sm px-4 md:px-6 py-3 border-b border-gray-800">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo/Brand */}
        <Link to="/" className="text-white font-bold text-xl md:text-2xl">
          Delson
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>

        {/* Menu centralizado (desktop) */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className={getLinkClass('/')}>Home</Link>
          <Link to="/projects" className={getLinkClass('/projects')}>Projetos</Link>
          <Link to="/technologies" className={getLinkClass('/technologies')}>Tecnologias</Link>
          <Link to="/contact" className={getLinkClass('/contact')}>Contato</Link>
        </div>

        {/* Social medias (direita) */}
        <div className="hidden md:flex gap-4 items-center">
          <a 
            href="https://github.com/delsinx" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xl text-white hover:text-blue-400 transition-colors duration-300"
          >
            <BsGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/delsonaafilho/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xl text-white hover:text-blue-400 transition-colors duration-300"
          >
            <BsLinkedin />
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black bg-opacity-95 backdrop-blur-sm flex flex-col items-center gap-6 py-6 border-b border-gray-800">
          <Link 
            to="/" 
            className={`${getLinkClass('/')} text-lg`}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/projects" 
            className={`${getLinkClass('/projects')} text-lg`}
            onClick={() => setOpen(false)}
          >
            Projetos
          </Link>
          <Link 
            to="/technologies" 
            className={`${getLinkClass('/technologies')} text-lg`}
            onClick={() => setOpen(false)}
          >
            Tecnologias
          </Link>
          <Link 
            to="/contact" 
            className={`${getLinkClass('/contact')} text-lg`}
            onClick={() => setOpen(false)}
          >
            Contato
          </Link>
          
          {/* Social medias no mobile */}
          <div className="flex gap-6 items-center mt-4 pt-4 border-t border-gray-700">
            <a 
              href="https://github.com/delsinx" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-2xl text-white hover:text-blue-400 transition-colors duration-300"
            >
              <BsGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/272205956748935170/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-2xl text-white hover:text-blue-400 transition-colors duration-300"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
