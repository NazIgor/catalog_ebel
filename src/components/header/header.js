import { NavLink } from "react-router-dom"
import './header.scss';
const Header=()=>{
    return(
        <>
            <ul className="header-link">
                <li className="header-link_item">
                    <NavLink to="/">Start!</NavLink>
                </li>
                <li className="header-link_item">
                    <NavLink to="/admin-panel">admin</NavLink>
                </li>
                {/* <li className="header-link_item">
                    <NavLink to="/add-page">добавить UI</NavLink>
                </li> */}
            </ul>
        </>
    )
}

export default Header;