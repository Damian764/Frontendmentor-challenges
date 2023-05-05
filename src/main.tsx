import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import NotFound from './layout/error/NotFound'
import Root from './routes/Root'
import Index from './routes/Index'
import Challenges from './routes/Challenges'
import { loader as challengesLoader } from './components/ChallengeList'
import Challenge, { loader as challengeLoader } from './components/Challenge'
import ChallengeRawView, { loader as challengeRavLoader } from './components/ChallengeRawView'
import './_main.scss'

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
                errorElement: <NotFound />,
                loader: challengesLoader
            },
            {
                path: 'challenges/:challengeId',
                element: <Challenge />,
                loader: challengeLoader
            }
        ]
    },
    {
        path: 'challenges/:challengeId/raw',
        element: <ChallengeRawView />,
        loader: challengeRavLoader
    }
], {
    basename: '/Frontendmentor-challenges/'
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
