import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { ThemeMode, ViewMode } from './data';

type AppContextType = {
  theme: ThemeMode;
  toggleTheme: () => void;
  view: ViewMode;
  setView: (v: ViewMode) => void;
};

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>('nude');
  const [view, setView] = useState<ViewMode>('corporate');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () =>
    setTheme((t) => (t === 'nude' ? 'dark' : 'nude'));

  return (
    <AppContext.Provider value={{ theme, toggleTheme, view, setView }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
