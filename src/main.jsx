import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductDetails from './components/ProductDetails.jsx'
import Notfound from './components/Notfound.jsx'
import Products from './pages/Products.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement:<Notfound/>
  },
  {
    path: '/products',
    element: <Products />,
    errorElement:<Notfound/>
  },
  {
    path: '/details/:URL',
    element:<ProductDetails/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

      <RouterProvider router={router} />
     
  </StrictMode>,
)
