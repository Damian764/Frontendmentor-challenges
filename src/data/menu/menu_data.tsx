export interface MenuLinkStructure {
    id: number,
    title: string,
    link: string
}

export const menu_data: MenuLinkStructure[] = [
    {
        id: 1,
        title: "Home",
        link: '/'
    },
    {
        id: 2,
        title: "Challenges",
        link: '/challenges'
    }
]