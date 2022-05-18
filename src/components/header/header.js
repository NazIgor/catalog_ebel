import { NavLink } from "react-router-dom"
const Header=()=>{
    return(
        <>
            <ul>
                <li>
                    <NavLink to="/">Start!</NavLink>
                </li>
                <li>
                    <NavLink to="/admin-panel">admin</NavLink>
                </li>
            </ul>
        </>
    )
}

export default Header;