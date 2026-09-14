import profilePhoto from '../assets/photo_2026-09-10_05-37-16.jpg'

function Hero() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-copy reveal reveal-delay-1">
        <p className="eyebrow">Computer Science Graduate · Software Developer</p>
        <h1 id="hero-title">
          Building software that <span>solves real problems.</span>
        </h1>
        <p className="hero-summary">
          Computer Science graduate with hands-on experience in web, mobile, desktop,
          AI-enabled applications, and networking. I enjoy turning ideas and
          requirements into practical software.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View Projects <span aria-hidden="true">↓</span>
          </a>
          <a className="button button-ghost" href="/cv.pdf" download="Lielt_Asnake_CV.pdf">
            Download CV <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="availability"><span className="status-dot" aria-hidden="true"></span> Open to junior software development opportunities</p>
      </div>

      <div className="hero-visual reveal reveal-delay-2" aria-label="Professional focus">
        <div className="hero-photo-frame">
          <img className="hero-photo" src={profilePhoto} alt="Lielt Asnake" />
        </div>
      </div>
    </section>
  )
}

export default Hero
