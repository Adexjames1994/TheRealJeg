import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-inner">
        <div>
          <p className="section-label">06 / CONTACT</p>

          <h2>
            Have an idea?
            <br />
            <span>Let's Build It.</span>
          </h2>

          <p className="contact-copy">
            Need a business website, web application, mobile app, dashboard or
            backend system? Let's turn the idea into a real product.
          </p>

          <div className="contact-links">
            <a href="mailto:your@email.com">
              <Mail size={18} />
              your@email.com
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <Linkedin size={18} />
              LinkedIn
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>

        <form
          className="contact-form"
          action="https://formsubmit.co/your@email.com"
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="New portfolio inquiry"
          />

          <input
            type="hidden"
            name="_captcha"
            value="false"
          />

          <label>
            Name
            <input
              name="name"
              required
              placeholder="Your name"
            />
          </label>

          <label>
            Email
            <input
              name="email"
              required
              type="email"
              placeholder="you@example.com"
            />
          </label>

          <label>
            Project Type
            <select name="projectType" defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              <option>Business Website</option>
              <option>Web Application</option>
              <option>Mobile Application</option>
              <option>Backend / API</option>
              <option>Other</option>
            </select>
          </label>

          <label>
            Message
            <textarea
              name="message"
              required
              rows="5"
              placeholder="Tell me briefly about your project..."
            />
          </label>

          <button
            className="primary-button submit-button"
            type="submit"
          >
            Send Message
            <ArrowUpRight size={17} />
          </button>
        </form>
      </div>
    </section>
  );
}