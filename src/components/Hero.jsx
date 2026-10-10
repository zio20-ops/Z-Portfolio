export default function Hero() {
  return (
    <section className="hero" id="home" data-aos="fade-up" data-aos-duration="900">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Hello, I'm Ziad</span>
          <h1>Designing bold digital experiences for businesses and creators</h1>
          <p className="hero-subtitle">
            I build modern, animated websites that feel polished, load fast, and always look
            great on every screen.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let&rsquo;s Talk
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <strong>8+</strong> Completed Projects
            </div>
            <div>
              <strong>15</strong> Certificates
            </div>
            <div>
              <strong>24/7</strong> Professional Support
            </div>
          </div>
        </div>
        <div className="hero-card" data-aos="fade-left" data-aos-duration="1000">
          <div className="hero-image-mask">
            <img src="/101eea27-7790-4ccf-8e42-7e42eb5d84e5.png" alt="Ziad Abdelhalim" />
          </div>
          <div className="hero-badge">
            <i className="fas fa-lightbulb"></i>
            <span>Creative Web Developer</span>
          </div>
        </div>
      </div>
    </section>
  )
}
