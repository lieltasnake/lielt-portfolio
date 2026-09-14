import SectionHeading from './SectionHeading'

function About() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <SectionHeading id="about-title" eyebrow="01 / About" title="A developer who enjoys building and learning." />
      <div className="about-content">
        <div className="about-statement">
          <p>
            I am a Computer Science graduate interested in software development, with
            experience across frontend, backend, mobile, desktop, databases, AI-enabled
            features, and networking.
          </p>
          <p>
            As Team Leader for my final-year project, I worked on both frontend and
            backend development while learning how to balance technical decisions,
            collaboration, and delivery. I am now looking for a junior or entry-level
            role where I can continue growing and contribute to meaningful projects.
          </p>
        </div>
        <div className="about-facts">
          <div><strong>2026</strong><span>Computer Science Graduate</span></div>
          <div><strong>Team Leader</strong><span>Final-Year Project</span></div>
          <div><strong>Full-stack</strong><span>Frontend and backend project experience</span></div>
        </div>
      </div>
    </section>
  )
}

export default About
