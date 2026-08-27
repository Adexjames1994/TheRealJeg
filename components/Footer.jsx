import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#home" className="brand">
          <Image
            src="/ja-logo.png"
            alt="JA"
            width={40}
            height={40}
            className="brand-logo"
          />

          <span>Jegede Adeola James</span>
        </a>

        <p>
          © 2026 Jegede Adeola James. Built for performance.
        </p>

        <div className="footer-links">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="mailto:your@email.com">Email</a>
        </div>
      </div>
    </footer>
  );
}