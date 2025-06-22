import React, { useState } from 'react';

const projects = [
  { 
    title: 'Meu portifolio', 
    video: '/background.mp4', 
    link: 'https://github.com/delsinx/My_Portifolio-main',
    description: 'Portfólio moderno e responsivo para exibir seus projetos com eficiência.',
    technologies: ['React', 'Tailwind', 'Java Script', 'html5 & css3']
  },
  { 
    title: 'Place holder titulo', 
    video: '/background.mp4', 
    link: 'place holder-link',
    description: 'Place holder descrição',
    technologies: ['Place holder tecnologias']
  },
  { 
    title: 'Place holder titulo', 
    video: '/background.mp4', 
link: 'place holder-link',
    description: 'Place holder descrição',
    technologies: ['Place holder tecnologias']
  },
  { 
    title: 'Place holder titulo', 
    video: '/background.mp4', 
    link: 'place holder-link',
    description: 'Place holder descrição',
    technologies: ['Place holder tecnologias']
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="relative w-full min-h-screen bg-gray-900 transition-colors duration-300">
      {/* Video de background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0 opacity-20"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <div className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meus Projetos
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore alguns dos projetos que desenvolvi, focando em soluções back-end 
              robustas e escaláveis para diferentes necessidades de negócio.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, i) => (
              <div
                key={i}
                className="bg-black bg-opacity-30 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative">
                  <iframe
                    src="https://delsonfilho.netlify.app/"
                    title={`Preview de ${project.title}`}
                    className="w-full h-48"
                    frameBorder="0"
                    scrolling="no"
                    style={{ pointerEvents: 'none', overflow: 'hidden' }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-semibold text-lg">Ver Detalhes</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Ver no GitHub →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-black bg-opacity-30 rounded-lg p-8 mt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Interessado em colaborar?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Estou sempre aberto a novos desafios e oportunidades de desenvolvimento. 
              Entre em contato para discutirmos seu próximo projeto.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <a 
                href="https://github.com/delsinx" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black bg-opacity-40 hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 border-2 border-white hover:text-gray-900 hover:bg-white"
              >
                Ver mais no GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/delsonaafilho/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Conectar no LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para detalhes do projeto */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              <iframe
                src="https://delsonfilho.netlify.app/"
                title={`Preview de ${selectedProject.title}`}
                className="w-full h-48 rounded-lg mb-4"
                frameBorder="0"
                scrolling="no"
                style={{ pointerEvents: 'none', overflow: 'hidden' }}
              />
              <p className="text-gray-300 mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Ver no GitHub
              </a>
            </div>
          </div>
        </div>
      )}

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
  );
}

