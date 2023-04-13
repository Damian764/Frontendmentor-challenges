import { ReactElement } from "react"
export interface ChallengeListStructure {
    id: string,
    title: string,
    image?: string,
    element: ReactElement<any, any>
}


const challenges_data: ChallengeListStructure[] = [
    {
        id: 'qr-code-component-main',
        title: 'QR code component',
        image: 'desktop-design.jpg',
        element: <h1>First challenge component</h1>
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