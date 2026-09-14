import SectionHeading from './SectionHeading'
import { projects } from '../data/portfolioData'

function Projects({ onOpenProject }) {
  return (
    <section className="section projects-section" id="projects" aria-labelledby="projects-title">
      <SectionHeading id="projects-title" eyebrow="03 / Projects" title="Selected work." />
      <div className="projects-list">
        {projects.map((project, index) => (
          <article className={`project-card ${index === 0 ? 'project-featured' : 'project-secondary'}`} key={project.title}>
            <div className="project-card-header">
              <span className="project-number">{project.number}</span>
              <span className="project-label">{project.label}</span>
            </div>
            <div className="project-card-content">
              <div>
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>
                {project.highlights.length > 0 && <ul className="project-highlights">
                  {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>}
                {project.technologies.length > 0 && <ul className="tag-list" aria-label={`${project.title} technologies`}>
                  {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>}
                <a className="project-details-link" href={`/projects/${project.slug}`} onClick={(event) => onOpenProject(event, project.slug)}>
                  View Details <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
