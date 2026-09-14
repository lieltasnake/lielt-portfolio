import SectionHeading from './SectionHeading'

function Education() {
  return (
    <section className="section education-section" id="education" aria-labelledby="education-title">
      <SectionHeading id="education-title" eyebrow="05 / Education" title="Education & foundation." />
      <div className="education-card">
        <div>
          <p className="education-year">Jun 2022 – Oct 2026</p>
          <h3>Bachelor&apos;s Degree in Computer Science</h3>
        </div>
        <p>
          University of Gondar<br />
          CGPA: 3.52 / 4.00 · Location: Gondar, Ethiopia
        </p>
      </div>
    </section>
  )
}

export default Education
