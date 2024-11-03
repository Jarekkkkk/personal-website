import { useLoaderData } from "react-router-dom";

export async function articleLoader({ params }: any) {
  const mdx = await import(`../assets/articles/${params.slug}/page.mdx`);
  return { mdx: mdx.default };
}

export function Article() {
  const { mdx } = useLoaderData() as any;

  return mdx();
}
