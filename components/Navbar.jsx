"use client";

import Image from "next/image";
import { ArrowDown, Menu, X } from "lucide-react";
import { useState } from "react";

const links = ["about", "projects", "experience", "services", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <Image
            src="/ja-logo.png"
            alt="JA"
            width={44}
            height={44}
            priority
            className="brand-logo"
          />
          <span>JA</span>
        </a>

        <nav className={`desktop-nav ${open ? "mobile-open" : ""}`}>
          {links.map((link) => (
            <a key={link} href={`#${link}`} onClick={() => setOpen(false)}>
              {link}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="outline-button cv-button" href="/resume.pdf">
            <ArrowDown size={16} />
            <span>Download CV</span>
          </a>

          <a className="primary-button nav-cta" href="#contact">
            Let's Work Together
          </a>

          <button
            className="menu-button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}