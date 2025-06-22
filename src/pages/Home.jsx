import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-gray-900 transition-colors duration-300">
      {/* Video de background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0 opacity-40"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <div className="relative z-10">
        {/* Home Section */}
        <section className="text-center text-white pt-32 pb-16 bg-transparent min-h-screen flex flex-col justify-center items-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              Bem vindo ao meu Portfólio
            </h1>
            <p className="text-xl md:text-3xl lg:text-4xl mb-8 text-gray-300">
              Back-end Developer
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
              <Link 
                to="/projects" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Ver Projetos
              </Link>
              <Link 
                to="/technologies" 
                className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Tecnologias
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-black bg-opacity-50 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Sobre Mim</h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              Sou um desenvolvedor back-end em formação, com foco em Java e Spring. Tenho paixão por criar APIs RESTful robustas, escaláveis e bem estruturadas
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Experiência</h3>
                <p className="text-gray-300">
                  Desenvolvimento de APIs RESTful, microserviços e integração de sistemas
                </p>
              </div>
              <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Foco</h3>
                <p className="text-gray-300">
                  Performance, escalabilidade e boas práticas de desenvolvimento
                </p>
              </div>
              <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Objetivo</h3>
                <p className="text-gray-300">
                  Criar soluções que impactem positivamente usuários e negócios
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="bg-black bg-opacity-40 py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Cursos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <a
                href="https://www.udemy.com/course/java-curso-completo/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black bg-opacity-40 p-6 rounded-lg cursor-pointer hover:bg-gray-900 hover:scale-105 transition-all duration-300 block shadow-lg"
                style={{ transitionProperty: 'background, transform, box-shadow' }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">Java Completo</h3>
                <p className="text-gray-300 text-sm mb-2">Udemy</p>
                <p className="text-gray-400 text-xs mb-2">80h - Programação Orientada a Objetos, JDBC, Spring Boot</p>
                <p className="text-green-400 text-xs font-semibold">
                  Certificação: <span className="underline">[Adicionar link ou código]</span>
                </p>
              </a>
              <a
                href="https://cursos.alura.com.br/formacao-spring-framework"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black bg-opacity-40 p-6 rounded-lg cursor-pointer hover:bg-gray-900 hover:scale-105 transition-all duration-300 block shadow-lg"
                style={{ transitionProperty: 'background, transform, box-shadow' }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">Spring Framework</h3>
                <p className="text-gray-300 text-sm mb-2">Alura</p>
                <p className="text-gray-400 text-xs mb-2">40h - Spring Boot, JPA, REST APIs</p>
                <p className="text-green-400 text-xs font-semibold">
                  Certificação: <span className="underline">[Adicionar link ou código]</span>
                </p>
              </a>
              <a
                href="https://web.dio.me/track/formacao-sql-database-specialist"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black bg-opacity-40 p-6 rounded-lg cursor-pointer hover:bg-gray-900 hover:scale-105 transition-all duration-300 block shadow-lg"
                style={{ transitionProperty: 'background, transform, box-shadow' }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">Banco de Dados SQL</h3>
                <p className="text-gray-300 text-sm mb-2">Digital Innovation One</p>
                <p className="text-gray-400 text-xs mb-2">20h - Modelagem, consultas e integrações</p>
                <p className="text-green-400 text-xs font-semibold">
                  Certificação: <span className="underline">[Adicionar link ou código]</span>
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-black bg-opacity-30 text-gray-300 py-6 mt-12 border-t border-gray-800 z-20 relative">
          <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <span className="text-sm mb-2 md:mb-0">
              © {new Date().getFullYear()} Meu Portfólio. Todos os direitos reservados.
            </span>
            <div className="flex flex-wrap gap-4 items-center text-sm">
              <span className="font-semibold text-white">Tecnologias:</span>
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2 py-1 bg-black bg-opacity-40 rounded hover:bg-gray-900 transition-colors"
                title="React"
              >
                <svg width="18" height="18" viewBox="0 0 40 40" fill="none"><ellipse cx="20" cy="20" rx="3" ry="3" fill="#61DAFB"/><ellipse cx="20" cy="20" rx="17" ry="7" stroke="#61DAFB" strokeWidth="2" fill="none"/><ellipse cx="20" cy="20" rx="7" ry="17" stroke="#61DAFB" strokeWidth="2" fill="none" transform="rotate(60 20 20)"/><ellipse cx="20" cy="20" rx="7" ry="17" stroke="#61DAFB" strokeWidth="2" fill="none" transform="rotate(120 20 20)"/></svg>
                React
              </a>
              <a
                href="https://developer.mozilla.org/docs/Web/JavaScript"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2 py-1 bg-black bg-opacity-40 rounded hover:bg-gray-900 transition-colors"
                title="JavaScript"
              >
                <svg width="18" height="18" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#F7DF1E"/><path d="M21.5 23.5c.5.8 1.2 1.4 2.4 1.4 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.8-1.6l-.6-.3c-1.7-.7-2.8-1.6-2.8-3.5 0-1.7 1.3-3 3.3-3 1.4 0 2.4.5 3.1 1.7l-1.7 1.1c-.4-.7-.8-1-1.4-1-.6 0-1 .4-1 .9 0 .6.4.9 1.3 1.3l.6.3c2 .9 3.1 1.7 3.1 3.6 0 2.1-1.7 3.2-4 3.2-2.2 0-3.5-1.1-4.2-2.5l1.8-1.1zm-8.2.2c.3.6.6 1.1 1.3 1.1.7 0 1.1-.3 1.1-1.4v-6.2h2.1v6.3c0 2.2-1.3 3.2-3.1 3.2-1.7 0-2.7-.9-3.2-2l1.8-1z" fill="#222"/></svg>
                JavaScript
              </a>
              <a
                href="https://tailwindcss.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2 py-1 bg-black bg-opacity-40 rounded hover:bg-gray-900 transition-colors"
                title="Tailwind CSS"
              >
                <svg width="18" height="18" viewBox="0 0 48 48" fill="none"><path d="M13.5 23.5C15.5 18.5 19.5 16 25 16c7 0 10.5 4 10.5 12-2 5-6 7.5-12 7.5-7 0-10.5-4-10.5-12z" fill="#38BDF8"/><path d="M2.5 35.5C4.5 30.5 8.5 28 14 28c7 0 10.5 4 10.5 12-2 5-6 7.5-12 7.5-7 0-10.5-4-10.5-12z" fill="#38BDF8"/></svg>
                Tailwind CSS
              </a>
              <a
                href="https://reactrouter.com/en/main"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2 py-1 bg-black bg-opacity-40 rounded hover:bg-gray-900 transition-colors"
                title="React Router"
              >
                <svg width="18" height="18" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#CA4245"/><path d="M10 22c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#fff" strokeWidth="2" fill="none"/><circle cx="16" cy="22" r="2" fill="#fff"/></svg>
                React Router
              </a>
              <a
                href="https://developer.mozilla.org/docs/Web/HTML"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2 py-1 bg-black bg-opacity-40 rounded hover:bg-gray-900 transition-colors"
                title="HTML5"
              >
                <svg width="18" height="18" viewBox="0 0 32 32" fill="none"><path d="M6 28L4 4h24l-2 24-10 4-10-4z" fill="#E44D26"/><path d="M16 27l8.1-2.9 1.7-19.1H16v22z" fill="#F16529"/><path d="M16 13h-4l.3 3h3.7v3h-3.3l.2 2h3.1v3.1l-2.7-.9-.2-2.2h-2.1l.4 4.1 6.6 2.3v-8.4zm0-5v3h7.1l-.2-2H16z" fill="#fff"/></svg>
                HTML5
              </a>
              <a
                href="https://developer.mozilla.org/docs/Web/CSS"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2 py-1 bg-black bg-opacity-40 rounded hover:bg-gray-900 transition-colors"
                title="CSS3"
              >
                <svg width="18" height="18" viewBox="0 0 32 32" fill="none"><path d="M6 28L4 4h24l-2 24-10 4-10-4z" fill="#1572B6"/><path d="M16 27l8.1-2.9 1.7-19.1H16v22z" fill="#33AADD"/><path d="M16 13h-4l.3 3h3.7v3h-3.3l.2 2h3.1v3.1l-2.7-.9-.2-2.2h-2.1l.4 4.1 6.6 2.3v-8.4zm0-5v3h7.1l-.2-2H16z" fill="#fff"/></svg>
                CSS3
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

