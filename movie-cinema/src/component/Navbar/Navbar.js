import { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul>
                   <li><a href="#">Home</a></li>
                   <li><a href="#">About</a></li>
                   <li><a href="#">Login</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;