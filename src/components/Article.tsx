import { ComponentPropsWithoutRef, useMemo } from "react";
import { MDXProvider } from "@mdx-js/react";
import { useLoaderData } from "react-router-dom";

// Define custom components for MDX elements
const components = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1 className="text-3xl font-bold mb-4" {...props} />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="text-2xl font-bold mb-3" {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3 className="text-xl font-bold mb-2" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="mb-4" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="list-disc pl-6 mb-4" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="list-decimal pl-6 mb-4" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="mb-1" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a className="text-blue-600 hover:underline" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="border-l-4 border-gray-300 pl-4 italic my-4"
      {...props}
    />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code
      className="bg-gray-100 rounded px-1 py-0.5 dark:bg-gray-800"
      {...props}
    />
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="bg-gray-100 rounded p-4 overflow-auto dark:bg-gray-800 my-4"
      {...props}
    />
  ),
};

export async function articleLoader({ params }: any) {
  const mdx = await import(`../assets/articles/${params.slug}/page.mdx`);
  return { mdx: mdx.default };
}

export function Article() {
  const { mdx: MDXComponent } = useLoaderData() as any;
  // Use useMemo to optimize rendering
  const content = useMemo(() => {
    return (
      <MDXProvider components={components}>
        <div className="prose lg:prose-xl">
          <MDXComponent />
        </div>
      </MDXProvider>
    );
  }, [MDXComponent]);

  return content;
}
