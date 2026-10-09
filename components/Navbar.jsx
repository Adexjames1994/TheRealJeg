"use client";

import Image from "next/image";
import { ArrowDown, Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/content/profile";

const links = ["about", "projects", "experience", "services", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a href="/#home" className="brand" onClick={() => setOpen(false)}>
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

        <nav id="main-navigation" aria-label="Main navigation" className={`desktop-nav ${open ? "mobile-open" : ""}`}>
          {links.map((link) => (
            <a key={link} href={`/#${link}`} onClick={() => setOpen(false)}>
              {link}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="outline-button cv-button" href={profile.resumeUrl || `mailto:${profile.email}?subject=CV%20request`} aria-label={profile.resumeUrl ? "Download CV" : "Request CV"} download={profile.resumeUrl ? true : undefined}>
            {profile.resumeUrl ? <ArrowDown size={16} /> : <Mail size={16} />}
            <span>{profile.resumeUrl ? "Download CV" : "Request CV"}</span>
          </a>

          <a className="primary-button nav-cta" href="/#contact">
            Let's Work Together
          </a>

          <button
            className="menu-button"
            id="menu-toggle"
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
