import { services } from '../data/services'

export default function Services() {
  return (
    <section id="services" className="services" data-aos="fade-up" data-aos-duration="900">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p className="section-subtitle">
            I deliver polished, scalable solutions for startups, agencies, and entrepreneurs.
          </p>
        </div>
        <div className="services-container">
          {services.map((service) => (
            <div className="service" key={service.title}>
              <i className={service.icon}></i>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
