import { useRef, useState } from 'react'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  const containerRef = useRef(null)
  const drag = useRef({ active: false, startX: 0, scrollStart: 0 })
  const [dragging, setDragging] = useState(false)

  const onPointerDown = (event) => {
    const el = containerRef.current
    drag.current = {
      active: true,
      startX: event.pageX - el.offsetLeft,
      scrollStart: el.scrollLeft,
    }
    setDragging(true)
    el.setPointerCapture(event.pointerId)
  }

  const onPointerMove = (event) => {
    if (!drag.current.active) return
    const el = containerRef.current
    const x = event.pageX - el.offsetLeft
    const delta = x - drag.current.startX
    el.scrollLeft = drag.current.scrollStart - delta
  }

  const stopDragging = (event) => {
    if (!drag.current.active) return
    drag.current.active = false
    setDragging(false)
    const el = containerRef.current
    if (el.hasPointerCapture?.(event.pointerId)) {
      el.releasePointerCapture(event.pointerId)
    }
  }

  return (
    <section id="testimonials" className="testimonials" data-aos="fade-up" data-aos-duration="900">
      <div className="container">
        <div className="section-title">
          <h2>Testimonials</h2>
          <p className="section-subtitle">
            Feedback from clients who enjoyed working with me on web projects.
          </p>
        </div>
        <div
          className={dragging ? 'testimonials-container dragging' : 'testimonials-container'}
          ref={containerRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={stopDragging}
          onPointerCancel={stopDragging}
          onPointerLeave={stopDragging}
        >
          {testimonials.map((item) => (
            <div className="testimonial" key={item.name}>
              <p>{item.quote}</p>
              <div className="testimonial-client">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = '/avatar-placeholder.svg'
                  }}
                />
                <div className="client-info">
                  <h4>{item.name}</h4>
                  <p>{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
