import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Router/Router.jsx'
import AuthProvider from './Authentication/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
)
