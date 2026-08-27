import { Code2 } from "lucide-react";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "React Native",
  "Expo",
  "Paystack"
];

export default function TechStrip() {
  const items = [...technologies, ...technologies];

  return (
    <section className="tech-strip" aria-label="Technologies">
      <div className="tech-track">
        {items.map((tech, index) => (
          <span key={`${tech}-${index}`}>
            <Code2 size={17} />
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}