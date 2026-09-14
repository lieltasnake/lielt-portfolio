import SectionHeading from './SectionHeading'

function Experience() {
  return (
    <section className="section experience-section" id="experience" aria-labelledby="experience-title">
      <SectionHeading id="experience-title" eyebrow="04 / Experience" title="Where I gained practical experience." />
      <article className="experience-entry">
        <div className="experience-meta">
          <span>Internship</span>
          <span>Ethio Telecom · Dessie branch</span>
          <time dateTime="2025-11-02/2025-12-30">02 Nov 2025 – 30 Dec 2025</time>
        </div>
        <div>
          <h3>Networking Intern</h3>
          <p>
            Gained hands-on experience with telecommunications network infrastructure,
            routing diagnostic tests, system monitoring, client connectivity troubleshooting,
            and documenting network operational procedures.
          </p>
          <ul className="tag-list">
            <li>Cisco networking</li>
            <li>Network configuration</li>
            <li>Troubleshooting</li>
          </ul>
        </div>
      </article>
    </section>
  )
}

export default Experience
