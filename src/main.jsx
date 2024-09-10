import './locales/i18n'
import App from './App.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css'
import './styles/tailwindInput.css'
import './styles/tailwindOutput.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
