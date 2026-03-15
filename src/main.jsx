import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const container = document.getElementById('root')

// If react-snap has prerendered content, hydrate instead of render
if (container.hasChildNodes()) {
  hydrateRoot(container, <React.StrictMode><App /></React.StrictMode>)
} else {
  createRoot(container).render(<React.StrictMode><App /></React.StrictMode>)
}
