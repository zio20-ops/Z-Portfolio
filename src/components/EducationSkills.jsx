import { skills } from '../data/skills'

export default function EducationSkills() {
  return (
    <section id="education" className="education-skills" data-aos="fade-up" data-aos-duration="900">
      <div className="container edu-skills-container">
        <div className="education card-block">
          <div className="section-title">
            <h2>Education</h2>
          </div>
          <div className="education-item">
            <h3>Pharaohs Institute for Computer Science</h3>
            <p>Bachelor's Degree in Computer Science</p>
            <p>Specialized in Web Development and User Interface Design</p>
          </div>
        </div>

        <div id="skills" className="skills card-block" data-aos="fade-left" data-aos-duration="900">
          <div className="section-title">
            <h2>Skills</h2>
          </div>
          <div className="skills-container">
            {skills.map((skill) => (
              <div className="skill" key={skill.label}>
                <i className={skill.icon}></i> {skill.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
