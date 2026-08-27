import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import ShaderBackground from "./ShaderBackground";
import TechObject from "./TechObject";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <ShaderBackground />

      <div className="hero-glow" />

      <div className="hero-object">
        <TechObject />
      </div>

      <div className="container hero-content">
        <div className="hero-copy">
          <div className="availability">
            <span />
            Available for Freelance Projects
          </div>

          <p className="eyebrow">FULL-STACK DEVELOPER / NIGERIA</p>

          <h1>
            Building Digital Products That{" "}
            <span>Solve Real Problems.</span>
          </h1>

          <p className="hero-description">
            I engineer high-performance web and mobile applications using
            modern stacks like React, Next.js and Node.js — turning complex
            requirements into seamless, user-focused experiences.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              View My Work
              <ArrowUpRight size={17} />
            </a>

            <a className="outline-button" href="#contact">
              Let's Work Together
            </a>
          </div>

          <div className="social-row">
            <a href="https://www.linkedin.com/in/jegede-adeola-32211b1a2/" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://github.com/Adexjames1994" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="mailto:adeolajegede1994@gmail.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      <a className="scroll-indicator" href="#projects">
        <span>SCROLL</span>
        <ArrowDown size={15} />
      </a>
    </section>
  );
}