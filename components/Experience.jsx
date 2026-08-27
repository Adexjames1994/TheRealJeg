import Reveal from "./Reveal";

const experience = [
  {
    role: "Full-Stack Developer",
    detail:
      "Building production-ready web applications, dashboards, APIs and integrations."
  },
  {
    role: "Frontend Developer",
    detail:
      "Creating responsive interfaces with React, Next.js, TypeScript and modern CSS."
  },
  {
    role: "Mobile Developer",
    detail:
      "Developing cross-platform experiences with React Native and Expo."
  },
  {
    role: "Hackathon & Innovation Projects",
    detail:
      "Turning real-world problems into working digital products under tight deadlines."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container experience-grid">
        <Reveal>
          <p className="section-label">05 / EXPERIENCE</p>
          <h2>Learning By Building.</h2>

          <p className="section-intro">
            Experience across product development, client work, innovation
            projects and full-stack engineering.
          </p>
        </Reveal>

        <div className="timeline">
          {experience.map((item, index) => (
            <Reveal className="timeline-item" key={item.role}>
              <span className="timeline-dot" />

              <div>
                <p className="timeline-index">0{index + 1}</p>
                <h3>{item.role}</h3>
                <p>{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}