import { PortableText } from "@portabletext/react";

export default function ProjectOverview({ value }) {
  if (!value?.length) return null;
  if (typeof value[0] === "string") {
    return value.map((paragraph) => <p key={paragraph}>{paragraph}</p>);
  }
  return <PortableText value={value} />;
}
