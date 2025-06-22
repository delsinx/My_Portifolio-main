const techs = [
  { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', link: 'https://dev.java/' },
  { name: 'Spring', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', link: 'https://spring.io/projects/spring-framework' },
  { name: 'Docker', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', link: 'https://www.docker.com/' },
  { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', link: 'https://git-scm.com/' },
  { name: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', link: 'https://www.mysql.com/' },
  { name: 'PostgreSQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', link: 'https://www.postgresql.org/' },
  { name: 'NoSQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', link: 'https://www.mongodb.com/nosql-explained' }
];

export default function Technologies() {
  return (
    <section id="tech" className="text-center mt-5">
      <h2 className="mb-4 text-2xl font-semibold text-white">Technologies I Use</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {techs.map((tech, i) => (
          <a
            key={i}
            href={tech.link}
            target="_blank"
            rel="noreferrer"
            className="w-28 p-3 flex flex-col items-center bg-black/60 border border-gray-700 rounded-lg shadow-md transition-transform duration-300 hover:scale-110 hover:bg-black/80 hover:shadow-xl"
          >
            <img
              src={tech.img}
              alt={tech.name}
              className="w-12 h-12 mb-2 transition-transform duration-300 group-hover:rotate-6"
            />
            <span className="text-sm text-gray-200">{tech.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
