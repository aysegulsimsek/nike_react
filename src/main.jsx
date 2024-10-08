import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'
import Notfound from './components/Notfound.jsx'
import Products from './pages/Products.jsx'
import Auth from './pages/Auth'
import PaymentForm from './pages/PaymentForm.jsx'
import { Provider } from 'react-redux';
import { store } from './redux/store.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement:<Notfound/>
  },
  {
    path: '/authantication',
    element: <Auth />,
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
  {
    path: '/payment',
    element: <PaymentForm/>,
    errorElement:<Notfound/>
  },
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>

      <RouterProvider router={router} />
     
  </Provider>,
)
