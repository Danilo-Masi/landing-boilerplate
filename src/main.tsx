import { ReactNode } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './components/theme/ThemeProvider.tsx';
import { AppProvider } from './context/AppContext.tsx'
import App from './App.tsx'

function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <AppProvider>
        {children}
      </AppProvider>
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <Providers>
    <App />
  </Providers>
);
