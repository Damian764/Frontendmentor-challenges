import { ReactElement } from "react"

export interface ChallengeListStructure {
    id: string,
    title: string,
    image?: string,
    technologies?: string[],
    element: ReactElement<any, any>
}

// Challenges imports

import QRComponent from '../../challenges/QR-code-component/src/Index'


const challenges_data: ChallengeListStructure[] = [
    {
        id: 'qr-code-component-main',
        title: 'QR code component',
        image: 'desktop-design.jpg',
        technologies: [
            'React',
            'React Router',
            'TypeScript',
            'Sass',
            'Vite'
        ],
        element: <QRComponent />
    },
    {
        id: 'second-challenge',
        title: 'Second challenge',
        element: <h1>Second challenge component</h1>
    },
    {
        id: 'qr-code-component-main',
        title: 'QR code component',
        image: 'desktop-design.jpg',
        element: <h1>First challenge component</h1>
    },
    {
        id: 'qr-code-component-main',
        title: 'QR code component',
        image: 'desktop-design.jpg',
        element: <h1>First challenge component</h1>
    },
    {
        id: 'qr-code-component-main',
        title: 'QR code component',
        image: 'desktop-design.jpg',
        element: <h1>First challenge component</h1>
    },
    {
        id: 'qr-code-component-main',
        title: 'QR code component',
        image: 'desktop-design.jpg',
        element: <h1>First challenge component</h1>
    },
    {
        id: 'qr-code-component-main',
        title: 'QR code component',
        image: 'desktop-design.jpg',
        element: <h1>First challenge component</h1>
    },
    {
        id: 'qr-code-component-main',
        title: 'QR code component',
        image: 'desktop-design.jpg',
        element: <h1>First challenge component</h1>
    },
    {
        id: 'qr-code-component-main',
        title: 'QR code component',
        image: 'desktop-design.jpg',
        element: <h1>First challenge component</h1>
    },
    {
        id: 'qr-code-component-main',
        title: 'QR code component',
        image: 'desktop-design.jpg',
        element: <h1>First challenge component</h1>
    },
    {
        id: 'qr-code-component-main',
        title: 'QR code component',
        image: 'desktop-design.jpg',
        element: <h1>First challenge component</h1>
    },
    {
        id: 'qr-code-component-main',
        title: 'QR code component',
        image: 'desktop-design.jpg',
        element: <h1>First challenge component</h1>
    },
    {
        id: 'qr-code-component-main',
        title: 'QR code component',
        image: 'desktop-design.jpg',
        element: <h1>First challenge component</h1>
    },
    {
        id: 'qr-code-component-main',
        title: 'QR code component',
        image: 'desktop-design.jpg',
        element: <h1>First challenge component</h1>
    },
    {
        id: 'qr-code-component-main',
        title: 'QR code component',
        image: 'desktop-design.jpg',
        element: <h1>First challenge component</h1>
    },
    {
        id: 'qr-code-component-main',
        title: 'QR code component',
        image: 'desktop-design.jpg',
        element: <h1>First challenge component</h1>
    },
    {
        id: 'qr-code-component-main',
        title: 'QR code component',
        image: 'desktop-design.jpg',
        element: <h1>First challenge component</h1>
    },
    {
        id: 'qr-code-component-main',
        title: 'QR code component',
        image: 'desktop-design.jpg',
        element: <h1>First challenge component</h1>
    },
    {
        id: 'qr-code-component-main',
        title: 'QR code component',
        image: 'desktop-design.jpg',
        element: <h1>First challenge component</h1>
    },
    {
        id: 'qr-code-component-main',
        title: 'QR code component',
        image: 'desktop-design.jpg',
        element: <h1>First challenge component</h1>
    },
    {
        id: 'qr-code-component-main',
        title: 'QR code component',
        image: 'desktop-design.jpg',
        element: <h1>First challenge component</h1>
    },
    {
        id: 'qr-code-component-main',
        title: 'QR code component',
        image: 'desktop-design.jpg',
        element: <h1>First challenge component</h1>
    },
    {
        id: 'qr-code-component-main',
        title: 'QR code component',
        image: 'desktop-design.jpg',
        element: <h1>First challenge component</h1>
    },
    {
        id: 'qr-code-component-main',
        title: 'QR code component',
        image: 'desktop-design.jpg',
        element: <h1>First challenge component</h1>
    },
    {
        id: 'qr-code-component-main',
        title: 'QR code component',
        image: 'desktop-design.jpg',
        element: <h1>First challenge component</h1>
    },
    {
        id: 'qr-code-component-main',
        title: 'QR code component',
        image: 'desktop-design.jpg',
        element: <h1>First challenge component</h1>
    }
]

export function getChallenges() {
    return challenges_data;
}

export function getChallenge(id: string) {
    const contact = challenges_data.find(challenge => challenge.id === id);
    return contact;
}