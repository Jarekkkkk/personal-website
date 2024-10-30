interface Article {
  title: string;
  description: string;
  author: string;
  date: string;
}

export interface ArticleWithSlug extends Article {
  slug: string;
}

async function importArticle(
  articleFilename: string,
): Promise<ArticleWithSlug> {
  let { article } = (await import(`${articleFilename}`)) as {
    default: React.ComponentType;
    article: Article;
  };

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ""),
    ...article,
  };
}

export async function getAllArticles() {
  const mdxModules = import.meta.glob("../assets/articles/**/*.mdx");

  const articles = await Promise.all(
    Object.keys(mdxModules).map((name: any) =>
      importArticle(mdxModules[name].name),
    ),
  );

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
