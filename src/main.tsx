import './locales/i18n'
import './styles/main.css'
import './styles/tailwindInput.css'
import './styles/tailwindOutput.css'

import App from './App.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const currentRoot = document.getElementById('root') as HTMLElement | null;

if (currentRoot) {
  createRoot(currentRoot).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}