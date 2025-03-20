import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Main_container from './Componet/Main-container'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main_container />
  </StrictMode>,
)
