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
              Tecnologias
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
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
                className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-4 transition-transform duration-300 group-hover:rotate-6">
                    <img
                      src={tech.img}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                  <span className={`text-xs px-3 py-1 rounded-full text-white ${getLevelColor(tech.level)}`}>
                    {tech.level}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Overview */}
          <div className="bg-gray-800 bg-opacity-80 rounded-lg p-8 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Áreas de Especialização
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">APIs RESTful</h3>
                <p className="text-gray-300">
                  Desenvolvimento de APIs escaláveis com Spring Boot, documentação OpenAPI e versionamento.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Microserviços</h3>
                <p className="text-gray-300">
                  Arquitetura de microserviços com Spring Cloud, service discovery e circuit breakers.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Segurança</h3>
                <p className="text-gray-300">
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
          <div className="bg-gray-800 rounded-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <img
                    src={selectedTech.img}
                    alt={selectedTech.name}
                    className="w-12 h-12 mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white">{selectedTech.name}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full text-white ${getLevelColor(selectedTech.level)}`}>
                      {selectedTech.level}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedTech(null)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              <p className="text-gray-300 mb-6">{selectedTech.description}</p>
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
    </div>
  );
}

