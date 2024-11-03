interface Article {
  title: string;
  description: string;
  author: string;
  date: string;
}

export interface ArticleWithSlug extends Article {
  slug: string;
}

export async function getAllArticles() {
  const mdxModules = import.meta.glob("../assets/articles/**/*.mdx", {
    eager: true,
  });

  const articles = Object.entries(mdxModules).map(
    ([name, { article }]: any) => {
      const match = name.match(/..\/articles\/([^\/]+)\/page\.mdx$/);
      const slug = match ? match[1] : "";
      return { slug, ...article };
    },
  );

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
