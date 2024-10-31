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
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <html lang="en" className="h-full antialiased" suppressHydrationWarning>
        <body className="flex h-full bg-zinc-500 w-screen dark:bg-black">
          <RouterProvider router={router} />
        </body>
      </html>
    </ThemeProvider>
  </StrictMode>,
);
