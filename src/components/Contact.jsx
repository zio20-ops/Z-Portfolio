import { useState } from 'react'

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)

  const handleChange = (e) => {
    const { id, value } = e.target
    setForm((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = form.name.trim()
    const email = form.email.trim()
    const message = form.message.trim()

    if (!name || !email || !message) {
      alert('Please fill in all required fields.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.')
      return
    }

    alert(
      `Thank you, ${name}! Your message has been sent successfully. I will get back to you soon.`,
    )
    setForm(initialForm)
  }

  return (
    <section id="contact" className="contact" data-aos="fade-up" data-aos-duration="900">
      <div className="container">
        <div className="section-title">
          <h2>Contact Me</h2>
          <p className="section-subtitle">
            Ready to build something great together? Send a message and I&rsquo;ll respond quickly.
          </p>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>zizo42230@gmail.com</p>
              </div>
            </div>
            <div className="contact-info-item">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>+2 01094159452</p>
              </div>
            </div>
            <div className="contact-info-item">
              <i className="fab fa-linkedin"></i>
              <div>
                <h3>LinkedIn</h3>
                <p>linkedin.com/in/ziad-abdo-495574369</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <div className="contact-badge">Available for hire</div>
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
