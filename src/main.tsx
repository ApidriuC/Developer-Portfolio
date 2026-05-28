import './locales/i18n';
import './styles/tailwindInput.css';
import './styles/main.css';

import { App } from './App'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const currentRoot = document.getElementById('root') as HTMLElement | null;
if (!currentRoot) throw new Error('No existe el elemento root.');

createRoot(currentRoot).render(
  <StrictMode>
    <App />
  </StrictMode>
);
