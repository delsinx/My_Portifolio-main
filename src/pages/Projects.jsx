import React, { useState } from 'react';

const projects = [
  { 
    title: 'E-commerce API', 
    video: '/background.mp4', 
    link: 'https://github.com/delsinx/project1',
    description: 'API completa para e-commerce com Spring Boot, incluindo autenticação, carrinho de compras e processamento de pagamentos.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'Docker']
  },
  { 
    title: 'Sistema de Gestão', 
    video: '/background.mp4', 
    link: 'https://github.com/delsinx/project2',
    description: 'Sistema de gestão empresarial com microserviços, cache distribuído e alta disponibilidade.',
    technologies: ['Java', 'Spring Cloud', 'Redis', 'PostgreSQL']
  },
  { 
    title: 'API de Analytics', 
    video: '/background.mp4', 
    link: 'https://github.com/delsinx/project3',
    description: 'API para processamento de dados em tempo real com Apache Kafka e análise de métricas.',
    technologies: ['Java', 'Kafka', 'MongoDB', 'Elasticsearch']
  },
  { 
    title: 'Plataforma de Integração', 
    video: '/background.mp4', 
    link: 'https://github.com/delsinx/project4',
    description: 'Plataforma para integração de sistemas legados com APIs modernas usando padrões de design.',
    technologies: ['Java', 'Spring Integration', 'RabbitMQ', 'Oracle']
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
                className="bg-gray-800 bg-opacity-80 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative">
                  <video 
                    className="w-full h-48 object-cover" 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
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
          <div className="text-center bg-gray-800 bg-opacity-80 rounded-lg p-8">
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
                className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
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
              <video 
                className="w-full h-48 object-cover rounded-lg mb-4" 
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src={selectedProject.video} type="video/mp4" />
              </video>
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
    </div>
  );
}

