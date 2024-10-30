import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Providers } from "./components/providers/AppProvider.tsx";
import { Layout } from "./components/Layout.tsx";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Foo from "./Foo.tsx";
import { ThemeProvider } from "./components/providers/ThemeProvider.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="h-screen items-center overflow-y-hidden w-screen relative flex flex-col mx-auto overflow-x-hidden text-white font-space-grotesk">
        <RouterProvider router={router} />
      </main>
    </ThemeProvider>
  </StrictMode>,
);
