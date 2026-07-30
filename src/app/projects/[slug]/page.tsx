import { notFound } from "next/navigation";

import { compileMDXContent, getContentBySlug, getContentSlugs } from "@/lib/mdx";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getContentSlugs("projects").map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getContentBySlug("projects", slug);

  if (!project) {
    notFound();
  }

  const content = await compileMDXContent(project.content);

  return (
    <main>
      <article>
        <h1>{project.frontmatter.title}</h1>
        {content}
      </article>
    </main>
  );
}
