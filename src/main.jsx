import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import LessonProvider from './components/lessonContex.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LessonProvider>
      <App />
    </LessonProvider>
  </BrowserRouter>
)
