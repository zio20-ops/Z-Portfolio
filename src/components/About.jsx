export default function About() {
  return (
    <section id="about" className="about" data-aos="fade-up" data-aos-duration="900">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p className="section-subtitle">
            I help brands stand out online through crafted interfaces, strategic layout, and
            meaningful animations.
          </p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              Since my beginning in programming, my true passion has been the ability to create
              and build solutions from a mere idea. I don't see myself as just a programmer, but
              as a bridge that transforms complexity into simplicity, to deliver tangible value
              that comforts people and improves their lives.
            </p>
            <p>
              With a keen eye for design and a passion for creating intuitive user experiences, I
              specialize in building websites that not only look beautiful but also function
              flawlessly across all devices.
            </p>
            <a href="/Ziad_Abdelhalim Resume.docx" className="btn btn-primary" download>
              <i className="fas fa-download"></i> Download CV
            </a>
          </div>
          <div className="about-img">
            <img src="/101eea27-7790-4ccf-8e42-7e42eb5d84e5.png" alt="Portrait of Ziad Abdelhalim" />
          </div>
        </div>
      </div>
    </section>
  )
}
