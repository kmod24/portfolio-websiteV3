import { notFound } from "next/navigation";

import { compileMDXContent, getContentBySlug, getContentSlugs } from "@/lib/mdx";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getContentSlugs("blog").map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getContentBySlug("blog", slug);

  if (!post) {
    notFound();
  }

  const content = await compileMDXContent(post.content);

  return (
    <main>
      <article>
        <h1>{post.frontmatter.title}</h1>
        {content}
      </article>
    </main>
  );
}
