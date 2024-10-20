//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'

import './index.css'

createRoot(document.getElementById('root')).render(
  // <StrictMode> -> hace que el código se renderice dos veces en desarrollo
    <RouterProvider router={router} />
  // </StrictMode>,
)
