import { Component } from "react";
import "./Navbar.css";
import {NavLink} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul>
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/popular"}>Popular</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/top"}>Top</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;