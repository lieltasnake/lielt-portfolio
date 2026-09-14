import SectionHeading from './SectionHeading'
import { skills } from '../data/portfolioData'

function Skills() {
  return (
    <section className="section skills-section" id="skills" aria-labelledby="skills-title">
      <SectionHeading id="skills-title" eyebrow="02 / Skills" title="Technologies I work with." />
      <div className="skills-grid">
        {skills.map((group) => (
          <article className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
