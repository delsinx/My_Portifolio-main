import React, { useState } from 'react';

const techCategories = {
  'Linguagens': [
    { 
      name: 'Java', 
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', 
      link: 'https://dev.java/',
      level: 'Intermediário',
      description: 'Linguagem principal para desenvolvimento back-end, com foco em Spring Framework e arquiteturas enterprise.'
    }
  ],
  'Frameworks': [
    { 
      name: 'Spring Boot', 
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', 
      link: 'https://spring.io/projects/spring-boot',
      level: 'Iniciante',
      description: 'Framework principal para criação de APIs RESTful, microserviços e aplicações enterprise.'
    },
    { 
      name: 'Spring Security', 
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', 
      link: 'https://spring.io/projects/spring-security',
      level: 'Iniciante',
      description: 'Implementação de autenticação, autorização e segurança em aplicações Spring.'
    }
  ],
  'Bancos de Dados': [
    { 
      name: 'MySQL', 
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', 
      link: 'https://www.mysql.com/',
      level: 'Iniciante',
      description: 'Banco relacional para aplicações web e sistemas de alta performance.'
    },
    { 
      name: 'PostgreSQL', 
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', 
      link: 'https://www.postgresql.org/',
      level: 'Iniciante',
      description: 'Banco relacional avançado com suporte a JSON e funcionalidades enterprise.'
    },
    { 
      name: 'MongoDB', 
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', 
      link: 'https://www.mongodb.com/',
      level: 'Iniciante',
      description: 'Banco NoSQL para aplicações que requerem flexibilidade de schema e escalabilidade.'
    }
  ],
  'DevOps & Ferramentas': [
    { 
      name: 'Docker', 
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', 
      link: 'https://www.docker.com/',
      level: 'Iniciante',
      description: 'Containerização de aplicações para desenvolvimento e deploy consistente.'
    },
    { 
      name: 'Git', 
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', 
      link: 'https://git-scm.com/',
      level: 'Iniciante',
      description: 'Controle de versão e colaboração em equipe com workflows GitFlow.'
    }
  ]
};

const getLevelColor = (level) => {
  switch (level) {
    case 'Avançado': return 'bg-green-600';
    case 'Intermediário': return 'bg-yellow-600';
    case 'Iniciante': return 'bg-red-600';
    default: return 'bg-gray-600';
  }
};

export default function Technologies() {
  const [selectedTech, setSelectedTech] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Linguagens');

  return (
    <div className="relative w-full min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 transition-colors duration-300">
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Tecnologias
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Conheça as tecnologias que utilizo para criar soluções robustas e escaláveis. 
              Cada ferramenta foi escolhida para maximizar performance e produtividade.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(techCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {techCategories[activeCategory].map((tech, i) => (
              <div
                key={i}
                onClick={() => setSelectedTech(tech)}
                className="bg-gray-100 bg-opacity-90 dark:bg-black dark:bg-opacity-30 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-4 transition-transform duration-300 group-hover:rotate-6">
                    <img
                      src={tech.img}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{tech.name}</h3>
                  <span className={`text-xs px-3 py-1 rounded-full text-white ${getLevelColor(tech.level)}`}>
                    {tech.level}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Overview */}
          <div className="bg-gray-100 dark:bg-black dark:bg-opacity-30 rounded-lg p-8 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
              Áreas de Especialização
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">APIs RESTful</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Desenvolvimento de APIs escaláveis com Spring Boot, documentação OpenAPI e versionamento.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Microserviços</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Arquitetura de microserviços com Spring Cloud, service discovery e circuit breakers.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Segurança</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Implementação de autenticação JWT, OAuth2 e práticas de segurança em aplicações.
                </p>
              </div>
            </div>
          </div>

          {/* Learning Path */}
          
        </div>
      </div>

      {/* Modal para detalhes da tecnologia */}
      {selectedTech && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <img
                    src={selectedTech.img}
                    alt={selectedTech.name}
                    className="w-12 h-12 mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{selectedTech.name}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full text-white ${getLevelColor(selectedTech.level)}`}>
                      {selectedTech.level}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedTech(null)}
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{selectedTech.description}</p>
              <a
                href={selectedTech.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
              >
                Saiba Mais
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

