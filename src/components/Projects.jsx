const projects = [
  { title: 'Project One', video: '/background.mp4', link: 'https://github.com/delsinx/project1' },
  { title: 'Project Two', video: '/background.mp4', link: 'https://github.com/delsinx/project2' },
  { title: 'Project Three', video: '/background.mp4', link: 'https://github.com/delsinx/project3' },
  { title: 'Project Four', video: '/background.mp4', link: 'https://github.com/delsinx/project4' }
];

export default function Projects() {
  return (
    <section id="projects" className="text-center mb-16">
      <h2 className="text-3xl font-bold text-white mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded overflow-hidden shadow-lg bg-gray-800"
          >
            <video className="w-full h-48 object-cover" autoPlay muted loop playsInline>
              <source src={project.video} type="video/mp4" />
            </video>
            <div className="p-4 text-white font-semibold">{project.title}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
