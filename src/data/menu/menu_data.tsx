export interface MenuLink {
    id: number,
    title: string,
    link: string
}

export const menu_data: MenuLink[] = [
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