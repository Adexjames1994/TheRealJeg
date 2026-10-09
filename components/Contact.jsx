import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/content/profile";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-inner">
        <div>
          <p className="section-label">06 / CONTACT</p>

          <h2>
            Have an opportunity?
            <br />
            <span>Let's Talk.</span>
          </h2>

          <p className="contact-copy">
            Hiring a developer or planning a project? I'm open to full-time
            roles, contract work and freelance projects across web, mobile and
            backend development.
          </p>

          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>
              <Mail size={18} />
              {profile.email}
            </a>

            <a href={profile.phoneHref}>
              <Phone size={18} />
              {profile.phone}
            </a>

            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} />
              LinkedIn
            </a>

            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>

        <form
          className="contact-form"
          action={`https://formsubmit.co/${profile.email}`}
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
              autoComplete="name"
              required
              placeholder="Your name"
            />
          </label>

          <label>
            Email
            <input
              name="email"
              autoComplete="email"
              required
              type="email"
              placeholder="you@example.com"
            />
          </label>

          <label>
            Opportunity Type
            <select name="opportunityType" defaultValue="" required>
              <option value="" disabled>
                Select an opportunity
              </option>
              <option>Full-time Role</option>
              <option>Contract Role</option>
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
              placeholder="Tell me about the role or project..."
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