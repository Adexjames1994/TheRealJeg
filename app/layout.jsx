import "./globals.css";
import { profile } from "@/content/profile";

export const metadata = {
  title: profile.name + " | Full-Stack Developer",
  description:
    "Jegede Adeola James is a full-stack developer in Nigeria building web apps, mobile experiences and APIs with React, Next.js and Node.js. Open to roles and freelance projects.",
  icons: { icon: "/ja-logo.png", apple: "/ja-logo.png" },
  openGraph: {
    title: profile.name + " | Full-Stack Developer",
    description: "Explore my web, mobile and backend projects. Open to roles and freelance work.",
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary",
    title: profile.name + " | Full-Stack Developer",
    description: "Web, mobile and backend development. Open to roles and freelance work.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <noscript><style>{".reveal { opacity: 1 !important; transform: none !important; }"}</style></noscript>
        {children}
      </body>
    </html>
  );
}
