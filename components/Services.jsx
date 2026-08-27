import {
  ArrowUpRight,
  Database,
  Globe,
  Layers3,
  Smartphone
} from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    text: "Professional responsive websites that help businesses establish an online presence and convert visitors into customers."
  },
  {
    icon: Layers3,
    title: "Web Applications",
    text: "Custom dashboards, SaaS platforms and business applications designed around specific workflows."
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    text: "Cross-platform mobile applications using React Native and Expo."
  },
  {
    icon: Database,
    title: "Backend & API Development",
    text: "Secure REST APIs, authentication systems, databases and third-party integrations."
  }
];

export default function Services() {
  return (
    <section id="services" className="section section-dark">
      <div className="container">
        <Reveal>
          <p className="section-label">04 / SERVICES</p>
          <h2>What I Can Build For You.</h2>
          <p className="section-intro">
            Tailored digital solutions for startups, small businesses and
            teams that need software that works.
          </p>
        </Reveal>

        <div className="services-grid">
          {services.map(({ icon: Icon, title, text }) => (
            <Reveal className="service-card" key={title}>
              <div className="service-icon">
                <Icon size={21} />
              </div>

              <h3>{title}</h3>
              <p>{text}</p>

              <ArrowUpRight className="service-arrow" size={20} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}