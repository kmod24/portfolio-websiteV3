import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";

const contentDirectory = path.join(process.cwd(), "content");

export type PostFrontmatter = {
  title: string;
  description?: string;
  date?: string;
  published?: boolean;
};

export function getContentSlugs(collection: "blog" | "projects") {
  const dir = path.join(contentDirectory, collection);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

export function getContentBySlug(
  collection: "blog" | "projects",
  slug: string,
) {
  const mdxPath = path.join(contentDirectory, collection, `${slug}.mdx`);
  const mdPath = path.join(contentDirectory, collection, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(raw);

  return {
    slug,
    frontmatter: data as PostFrontmatter,
    content,
  };
}

export function getAllContent(collection: "blog" | "projects") {
  return getContentSlugs(collection)
    .map((slug) => getContentBySlug(collection, slug))
    .filter((item): item is NonNullable<typeof item> => item !== null);
}

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
};

export function getBlogPosts(): BlogPost[] {
  return getAllContent("blog")
    .filter((post) => post.frontmatter.published !== false)
    .map((post) => ({
      slug: post.slug,
      title: post.frontmatter.title,
      date: post.frontmatter.date ?? "",
      description: post.frontmatter.description ?? "",
      content: post.content.trim(),
    }))
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });
}

export async function compileMDXContent(source: string) {
  const { content } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: "github-dark",
              keepBackground: true,
            },
          ],
        ],
      },
    },
  });

  return content;
}
