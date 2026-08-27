import "./globals.css";

export const metadata = {
  title: "Jegede Adeola James | Full-Stack Developer",
  description:
    "Full-Stack Developer building high-performance web and mobile applications."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}