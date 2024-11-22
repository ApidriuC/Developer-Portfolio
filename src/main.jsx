import './locales/i18n'
import './styles/main.css'
import './styles/tailwindInput.css'
import './styles/tailwindOutput.css'

import App from './App.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
