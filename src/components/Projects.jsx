import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="projects" data-aos="fade-up" data-aos-duration="900">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
          <p className="section-subtitle">
            Selected case studies that showcase strong visuals, UX, and reliable execution.
          </p>
        </div>
        <div className="projects-container">
          {projects.map((project) => (
            <div className="project" key={project.title}>
              <div className="project-img">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.visibility = 'hidden'
                  }}
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
