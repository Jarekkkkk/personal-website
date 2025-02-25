import { Card } from "@/components/Card";
import { SimpleLayout } from "@/components/SimpleLayout";
import { formateDate } from "@/lib";
import { type ArticleWithSlug, getAllArticles } from "@/lib/articles";
import { useEffect, useState } from "react";

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      {
        <Card className="md:col-span-3">
          <Card.Title href={`/articles/${article.slug}`}>
            {article.title}
          </Card.Title>
          <Card.Eyebrow
            as="time"
            dateTime={article.date}
            className="md:hidden"
            decorate
          >
            {formateDate(article.date)}
          </Card.Eyebrow>
          <Card.Description>{article.description}</Card.Description>
          <Card.Cta>Read article</Card.Cta>
        </Card>
      }
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formateDate(article.date)}
      </Card.Eyebrow>
    </article>
  );
}

export default function ArticlesIndex() {
  const [articles, setArticles] = useState<ArticleWithSlug[]>([]);

  useEffect(() => {
    const init = async () => {
      const articles_ = await getAllArticles();
      setArticles(articles_);
    };

    init();
  }, []);

  return (
    <SimpleLayout
      title="Writing on software design, company building, and the aerospace industry."
      intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  );
}
