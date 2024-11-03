import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "@/routes/App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/providers/ThemeProvider.tsx";
import { Layout } from "./components/Layout.tsx";
import About from "@/routes/About.tsx";
import Articles from "./routes/Articles.tsx";
import Projects from "./routes/Projects.tsx";
import Speaking from "./routes/Speaking.tsx";
import Uses from "./routes/Uses.tsx";
import { Article, articleLoader } from "./components/Article.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/articles",
        element: <Articles />,
      },
      {
        path: "/articles/:slug",
        loader: articleLoader,
        element: <Article />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/speaking",
        element: <Speaking />,
      },
      {
        path: "/uses",
        element: <Uses />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-500 w-screen dark:bg-black">
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <RouterProvider router={router} />
        </ThemeProvider>
      </body>
    </div>
  </StrictMode>,
);
