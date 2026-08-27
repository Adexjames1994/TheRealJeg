import Studio from "./studio";
import { hasSanityConfig } from "@/sanity/env";

export const metadata = { title: "Portfolio CMS", robots: { index: false, follow: false } };

export default function StudioRoute() {
  if (!hasSanityConfig) {
    return (
      <main className="studio-setup"><div>
        <p className="section-label">SANITY CMS SETUP</p>
        <h1>Connect your Sanity project.</h1>
        <p>Add the project ID and dataset shown in <code>.env.example</code> to a new <code>.env.local</code>, then restart the development server.</p>
        <a className="outline-button" href="/">Return to portfolio</a>
      </div></main>
    );
  }
  return <Studio />;
}
