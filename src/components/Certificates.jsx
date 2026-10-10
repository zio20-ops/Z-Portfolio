import { certificates } from '../data/certificates'

export default function Certificates() {
  return (
    <section id="certificates" className="certificates" data-aos="fade-up" data-aos-duration="900">
      <div className="container">
        <div className="section-title">
          <h2>Certificates</h2>
          <p className="section-subtitle">
            Verified training and achievements that support my design and development work.
          </p>
        </div>

        <div className="certificates-container">
          {certificates.map((cert) => (
            <div className="certificate" key={cert.title}>
              <div className="certificate-img">
                <img
                  src={cert.image}
                  alt={cert.alt}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.visibility = 'hidden'
                  }}
                />
              </div>
              <div className="certificate-content">
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
                <div className="certificate-details">
                  <div>
                    <strong>Issued by:</strong> {cert.issuer}
                  </div>
                  <div>
                    <strong>Date:</strong> {cert.date}
                  </div>
                  <div>
                    <strong>Duration:</strong> {cert.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
