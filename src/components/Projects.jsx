import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';





function Projects() {
  const projects = [
    {
      title: "Optimize Hiring",
      description: "Recruitment services can be provided by external recruitment agencies, executive search firms, or in-house corporate recruitment teams.",
      image: project1,
      link: "https://optimizehiring.com/"
    },
    {
      title: "Ashoka Foam",
      description: "Our state-of-the-art manufacturing facilities and unmatched world-class quality has allowed us to carve a niche for our products in the worldwide markets.",
      image: project2,
      link: "https://ashokafoam.com/"
    },
    {
      title: "Lord Krishna International School",
      description: "It provides students with exceptional opportunities to develop their full potential—academically, socially, and personally.",
      image: project3,
      link: "https://lkischool.com/"
    }
  ]

  return (
    <section id="projects" className="bg-gray-50 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-indigo-600 font-semibold text-center mb-2">My Work</p>
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-40 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{project.description}</p>
                <a href={project.link} className="text-indigo-600 text-sm font-medium hover:underline">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;