import SectionHeading from './SectionHeading'
import { contact } from '../data/portfolioData'

function Contact() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <SectionHeading id="contact-title" eyebrow="06 / Contact" title="Let&apos;s build something useful.">
        I am currently open to junior and entry-level software development opportunities.
        Feel free to reach out through any of the following channels.
      </SectionHeading>
      <div className="contact-row">
        <div className="contact-links">
          <a className="contact-link" href={`tel:${contact.phone.replaceAll(' ', '')}`}><span>Phone</span>{contact.phone}<b aria-hidden="true">↗</b></a>
          <a className="contact-link" href={`mailto:${contact.email}`}><span>Email</span>{contact.email}<b aria-hidden="true">↗</b></a>
          <a className="contact-link" href={contact.linkedin} target="_blank" rel="noopener noreferrer"><span>LinkedIn</span>linkedin.com/in/lielt-asnake-216a68406 <b aria-hidden="true">↗</b></a>
          <a className="contact-link" href={contact.github} target="_blank" rel="noopener noreferrer"><span>GitHub</span>github.com/lieltasnake <b aria-hidden="true">↗</b></a>
          <a className="contact-link" href={contact.telegram} target="_blank" rel="noopener noreferrer"><span>Telegram</span>t.me/Lielt2119 <b aria-hidden="true">↗</b></a>
        </div>
        <a className="button button-primary" href={`mailto:${contact.email}`}>Start a conversation <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  )
}

export default Contact
