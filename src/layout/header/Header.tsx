import "./_header.scss"
import { Link } from "react-router-dom";
import { menu_data, MenuLink } from './../../data/menu/menu_data';

const Header = () => {
    return (
        <nav className="header container">
            <Link to={'/'} className="logo">
                <div className="light">Logo LGHT</div>
                <div className="dark">Logo DARK</div>
            </Link>
            <div className="navigation">
                <ul>
                    {menu_data.map((element: MenuLink) => <li key={element.id} className="navigation-link"><Link to={element.link}>{element.title}</Link></li>)}
                </ul>
            </div>
        </nav>
    )
}
export default Header