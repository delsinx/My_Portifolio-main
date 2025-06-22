import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      // Padrão: dark mode ativado
      if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'dark');
        return true;
      }
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return true;
  });
  const location = useLocation();

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

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
    <nav className="fixed top-0 left-0 w-full z-20 bg-white/80 dark:bg-black/70 backdrop-blur-sm px-4 md:px-6 py-3 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Social medias (esquerda) */}
        <div className="flex gap-4 items-center">
          <a 
            href="https://github.com/delsinx" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xl text-gray-900 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <BsGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/delsonaafilho/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xl text-gray-900 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <BsLinkedin />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-900 dark:text-white text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>

        {/* Menu centralizado (desktop) */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className={`font-medium transition-all duration-300 ${isActive('/') ? 'border-b-2 border-blue-400 text-blue-400' : 'text-gray-900 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 hover:border-b-2 hover:border-blue-400'}`}>Home</Link>
          <Link to="/projects" className={`font-medium transition-all duration-300 ${isActive('/projects') ? 'border-b-2 border-blue-400 text-blue-400' : 'text-gray-900 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 hover:border-b-2 hover:border-blue-400'}`}>Projetos</Link>
          <Link to="/technologies" className={`font-medium transition-all duration-300 ${isActive('/technologies') ? 'border-b-2 border-blue-400 text-blue-400' : 'text-gray-900 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 hover:border-b-2 hover:border-blue-400'}`}>Tecnologias</Link>
          <Link to="/contact" className={`font-medium transition-all duration-300 ${isActive('/contact') ? 'border-b-2 border-blue-400 text-blue-400' : 'text-gray-900 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 hover:border-b-2 hover:border-blue-400'}`}>Contato</Link>
        </div>

        {/* Dark Mode Toggle (direita) */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center bg-gray-200 dark:bg-gray-800 rounded-full px-2 py-1">
            <button
              onClick={() => setDark(true)}
              className={`text-xl px-2 py-1 rounded-full transition-colors duration-300 ${dark ? 'bg-blue-900 text-yellow-300' : 'text-gray-900 dark:text-gray-400'}`}
              aria-label="Modo escuro"
            >
              <FiMoon />
            </button>
            <button
              onClick={() => setDark(false)}
              className={`text-xl px-2 py-1 rounded-full transition-colors duration-300 ${!dark ? 'bg-yellow-400 text-white' : 'text-gray-900 dark:text-gray-400'}`}
              aria-label="Modo claro"
            >
              <FiSun />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-black/95 backdrop-blur-sm flex flex-col items-center gap-6 py-6 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
          <div className="flex gap-6 items-center">
            <a 
              href="https://github.com/delsinx" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-2xl text-gray-900 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <BsGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/delsonaafilho/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-2xl text-gray-900 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <BsLinkedin />
            </a>
          </div>
          <Link 
            to="/" 
            className={`text-lg font-medium transition-all duration-300 ${isActive('/') ? 'border-b-2 border-blue-400 text-blue-400' : 'text-gray-900 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 hover:border-b-2 hover:border-blue-400'}`}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/projects" 
            className={`text-lg font-medium transition-all duration-300 ${isActive('/projects') ? 'border-b-2 border-blue-400 text-blue-400' : 'text-gray-900 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 hover:border-b-2 hover:border-blue-400'}`}
            onClick={() => setOpen(false)}
          >
            Projetos
          </Link>
          <Link 
            to="/technologies" 
            className={`text-lg font-medium transition-all duration-300 ${isActive('/technologies') ? 'border-b-2 border-blue-400 text-blue-400' : 'text-gray-900 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 hover:border-b-2 hover:border-blue-400'}`}
            onClick={() => setOpen(false)}
          >
            Tecnologias
          </Link>
          <Link 
            to="/contact" 
            className={`text-lg font-medium transition-all duration-300 ${isActive('/contact') ? 'border-b-2 border-blue-400 text-blue-400' : 'text-gray-900 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 hover:border-b-2 hover:border-blue-400'}`}
            onClick={() => setOpen(false)}
          >
            Contato
          </Link>
          {/* Dark Mode Toggle no mobile */}
          <div className="flex items-center bg-gray-200 dark:bg-gray-800 rounded-full px-2 py-1 mt-4">
            <button
              onClick={() => setDark(true)}
              className={`text-2xl px-2 py-1 rounded-full transition-colors duration-300 ${dark ? 'bg-blue-900 text-yellow-300' : 'text-gray-900 dark:text-gray-400'}`}
              aria-label="Modo escuro"
            >
              <FiMoon />
            </button>
            <button
              onClick={() => setDark(false)}
              className={`text-2xl px-2 py-1 rounded-full transition-colors duration-300 ${!dark ? 'bg-yellow-400 text-white' : 'text-gray-900 dark:text-gray-400'}`}
              aria-label="Modo claro"
            >
              <FiSun />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
