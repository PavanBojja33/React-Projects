import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Content from './components/Content.jsx'
import Header from './components/Header.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
