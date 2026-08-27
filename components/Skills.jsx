import { Database, Smartphone, Terminal } from "lucide-react";
import Reveal from "./Reveal";

const groups = [
  {
    title: "Frontend",
    icon: Terminal,
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML & CSS"
    ]
  },
  {
    title: "Backend",
    icon: Database,
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "Mongoose",
      "Authentication"
    ]
  },
  {
    title: "Mobile & Tools",
    icon: Smartphone,
    items: [
      "React Native",
      "Expo",
      "Git",
      "GitHub",
      "Vercel",
      "Paystack"
    ]
  }
];

export default function Skills() {
  return (
    <section className="section section-dark">
      <div className="container">
        <Reveal>
          <p className="section-label">02 / TOOLKIT</p>
          <h2>Built With Modern Technology.</h2>
        </Reveal>

        <div className="skills-layout">
          {groups.map(({ title, icon: Icon, items }) => (
            <Reveal className="skill-card" key={title}>
              <div className="skill-icon">
                <Icon size={20} />
              </div>

              <h3>{title}</h3>

              <div className="chips">
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}