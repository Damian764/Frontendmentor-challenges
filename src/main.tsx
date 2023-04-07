import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import NotFound from './layout/error/NotFound'
import Root from './routes/Root'
import Index from './routes/Index'
import Challenges from './routes/Challenges'
import './index.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true, element: <Index />
      },
      {
        path: 'challenges',
        element: <Challenges />,
        errorElement: <NotFound />
      }
    ]
  }
], {
  basename: '/Frontendmentor-challenges/'
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
