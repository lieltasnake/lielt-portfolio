import { getValidExternalUrl } from '../utils/externalUrl'

function ProjectDetails({ project, onBack }) {
  const androidDownloadUrl = project.slug === 'dr-ai' ? getValidExternalUrl(project.androidDownloadUrl) : ''

  return (
    <main className="project-details-page">
      <div className="project-details-topline">
        <a className="back-link" href="/#projects" onClick={onBack}>← Back to Projects</a>
        <span>{project.number} / PROJECT</span>
      </div>

      <header className="project-details-heading">
        <p className="eyebrow">{project.label}</p>
        <h1>{project.title}</h1>
        <p className="project-details-subtitle">{project.subtitle}</p>
      </header>

      <div className="project-details-grid">
        <section className="project-details-card project-details-overview">
          <p className="details-label">Overview</p>
          <p>{project.overview}</p>
        </section>

        {project.slug === 'dr-ai' && (
          <section className="project-details-card app-download-section">
            <h2>Try the Mobile App</h2>
            <p>Dr. AI is an Android application. Installation on an Android device may be required.</p>
            {androidDownloadUrl && <a className="button button-primary" href={androidDownloadUrl} target="_blank" rel="noopener noreferrer">Download Android App</a>}
          </section>
        )}

        {project.problem && (
          <section className="project-details-card">
            <p className="details-label">Problem</p>
            <p>{project.problem}</p>
          </section>
        )}

        {project.role && (
          <section className="project-details-card">
            <p className="details-label">My role</p>
            <h2>{project.role}</h2>
            <p>{project.roleDescription}</p>
          </section>
        )}

        <section className="project-details-card">
          <p className="details-label">Technologies used</p>
          {project.technologies.length > 0 ? (
            <ul className="tag-list" aria-label={`${project.title} technologies`}>
              {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          ) : <p>Technology details will be added when confirmed.</p>}
        </section>

        {project.features.length > 0 && (
          <section className="project-details-card">
            <p className="details-label">Main features</p>
            <ul className="details-list">
              {project.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </section>
        )}

        {project.architecture?.length > 0 && (
          <section className="project-details-card">
            <p className="details-label">System architecture</p>
            <ul className="details-list">
              {project.architecture.map((layer) => <li key={layer}>{layer}</li>)}
            </ul>
          </section>
        )}

        {project.deployment && (
          <section className="project-details-card">
            <p className="details-label">Deployment</p>
            <p>{project.deployment}</p>
          </section>
        )}

        {project.disclaimer && (
          <section className="project-details-card">
            <p className="details-label">Medical disclaimer</p>
            <p>{project.disclaimer}</p>
          </section>
        )}

        {project.resources?.length > 0 && (
          <section className="project-details-card">
            <p className="details-label">Project links</p>
            <ul className="details-list">
              {project.resources.map((resource) => (
                <li key={resource.label}>
                  {resource.url ? (
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.label}</a>
                  ) : (
                    <span>{resource.label}: {resource.pending}</span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.highlights.length > 0 && (
          <section className="project-details-card">
            <p className="details-label">Project contributions</p>
            <ul className="details-list">
              {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </section>
        )}

        {project.screenshots.length > 0 && (
          <section className="project-details-card project-screenshots">
            <p className="details-label">Screenshots</p>
            <div className="screenshot-grid">
              {project.screenshots.map((screenshot) => (
                <figure className="screenshot-item" key={screenshot.src}>
                  <img src={screenshot.src} alt={screenshot.alt} />
                  {screenshot.caption && <figcaption>{screenshot.caption}</figcaption>}
                </figure>
              ))}
            </div>
          </section>
        )}

        {project.lessons && (
          <section className="project-details-card">
            <p className="details-label">What I learned</p>
            <p>{project.lessons}</p>
          </section>
        )}
      </div>

      {(project.githubUrl || project.liveUrl) && (
        <div className="project-links">
          {project.githubUrl && <a className="button button-outline" href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>}
          {project.liveUrl && <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>}
        </div>
      )}

      <a className="button button-primary project-details-back" href="/#projects" onClick={onBack}>Back to Projects</a>
    </main>
  )
}

export default ProjectDetails