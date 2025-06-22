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
              <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Experiência</h3>
                <p className="text-gray-300">
                  Desenvolvimento de APIs RESTful, microserviços e integração de sistemas
                </p>
              </div>
              <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Foco</h3>
                <p className="text-gray-300">
                  Performance, escalabilidade e boas práticas de desenvolvimento
                </p>
              </div>
              <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg">
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
                className="bg-gray-800 bg-opacity-70 p-6 rounded-lg cursor-pointer hover:bg-gray-700 hover:scale-105 transition-all duration-300 block shadow-lg"
                style={{ transitionProperty: 'background, transform, box-shadow' }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">Java Completo</h3>
                <p className="text-gray-300 text-sm mb-2">Udemy</p>
                <p className="text-gray-400 text-xs mb-2">80h - Programação Orientada a Objetos, JDBC, Spring Boot</p>
                {/* Espaço para certificação */}
                <p className="text-green-400 text-xs font-semibold">
                  Certificação: <span className="underline">[Adicionar link ou código]</span>
                </p>
              </a>
              <a
                href="https://cursos.alura.com.br/formacao-spring-framework"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 bg-opacity-70 p-6 rounded-lg cursor-pointer hover:bg-gray-700 hover:scale-105 transition-all duration-300 block shadow-lg"
                style={{ transitionProperty: 'background, transform, box-shadow' }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">Spring Framework</h3>
                <p className="text-gray-300 text-sm mb-2">Alura</p>
                <p className="text-gray-400 text-xs mb-2">40h - Spring Boot, JPA, REST APIs</p>
                {/* Espaço para certificação */}
                <p className="text-green-400 text-xs font-semibold">
                  Certificação: <span className="underline">[Adicionar link ou código]</span>
                </p>
              </a>
              <a
                href="https://web.dio.me/track/formacao-sql-database-specialist"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 bg-opacity-70 p-6 rounded-lg cursor-pointer hover:bg-gray-700 hover:scale-105 transition-all duration-300 block shadow-lg"
                style={{ transitionProperty: 'background, transform, box-shadow' }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">Banco de Dados SQL</h3>
                <p className="text-gray-300 text-sm mb-2">Digital Innovation One</p>
                <p className="text-gray-400 text-xs mb-2">20h - Modelagem, consultas e integrações</p>
                {/* Espaço para certificação */}
                <p className="text-green-400 text-xs font-semibold">
                  Certificação: <span className="underline">[Adicionar link ou código]</span>
                </p>
              </a>
              
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

