import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Homepage from './landing_page/home/HomePage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Homepage />
  </StrictMode>,
)
