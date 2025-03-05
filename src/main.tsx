import { createRoot } from 'react-dom/client'
import './index.css'
import { AppProvider } from './context/AppContext.tsx'
import App from './App.tsx'
import { ThemeProvider } from './components/theme/ThemeProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </AppProvider>
);
