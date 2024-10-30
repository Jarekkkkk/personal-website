import { createContext, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function usePrevious<T>(value: T) {
  let ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
export const AppContext = createContext<{ previousPathname?: string }>({});

export function Providers({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const pathname = location.pathname;
  const previousPathname = usePrevious(pathname);

  console.log(previousPathname);

  return (
    <AppContext.Provider value={{ previousPathname }}>
      {children}
    </AppContext.Provider>
  );
}
