import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: "category", title: "Category", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Card description", type: "text", rows: 3, validation: (rule) => rule.required().max(220) }),
    defineField({ name: "mainImage", title: "Cover image", type: "image", options: { hotspot: true } }),
    defineField({ name: "tech", title: "Technologies", type: "array", of: [{ type: "string" }], options: { layout: "tags" } }),
    defineField({ name: "featured", title: "Featured project", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Display order", type: "number", initialValue: 10 }),
    defineField({ name: "year", title: "Year", type: "string" }),
    defineField({ name: "role", title: "My role", type: "string" }),
    defineField({ name: "overview", title: "Overview", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "challenge", title: "The challenge", type: "text", rows: 5 }),
    defineField({ name: "solution", title: "The solution", type: "text", rows: 5 }),
    defineField({ name: "outcome", title: "The outcome", type: "text", rows: 5 }),
    defineField({ name: "liveUrl", title: "Live project URL", type: "url" }),
    defineField({ name: "repositoryUrl", title: "Repository URL", type: "url" }),
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "mainImage" },
  },
});
