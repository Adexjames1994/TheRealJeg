import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <Reveal>
          <p className="section-label">01 / ABOUT</p>
          <h2>
            More Than
            <br />
            <span>Just Code.</span>
          </h2>
        </Reveal>

        <Reveal className="about-content">
          <p className="lead">
            I build complete digital products — from polished interfaces to
            reliable backend systems and integrations.
          </p>

          <p>
            My focus is simple: understand the real business problem, design a
            clean experience and ship software that people can actually use.
          </p>

          <div className="stats-grid">
            <div>
              <strong>20+</strong>
              <span>Projects Built</span>
            </div>
            <div>
              <strong>4+</strong>
              <span>Core Development Areas</span>
            </div>
            <div>
              <strong>Web</strong>
              <span>& Mobile</span>
            </div>
            <div>
              <strong>End-to-End</strong>
              <span>Product Development</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}