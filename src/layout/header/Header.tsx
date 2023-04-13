import "./_header.scss"
import { NavLink } from "react-router-dom";
import { menu_data, MenuLinkStructure } from './../../data/menu/menu_data';

const Header = () => {
    return (
        <nav className="header container">
            <a href="#main" className="skip-link">Skip to content</a>
            <NavLink to={'/'} className="logo">
                <div className="light">Logo LGHT</div>
                <div className="dark">Logo DARK</div>
            </NavLink>
            <div className="navigation">
                <ul>
                    {menu_data.map((element: MenuLinkStructure) => <li key={element.id} className="navigation-link"><NavLink to={element.link}>{element.title}</NavLink></li>)}
                </ul>
            </div>
        </nav>
    )
}
export default Header