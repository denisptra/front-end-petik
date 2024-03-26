// Di tambahkan import componen untuk footer karena menggunkaan class
import { Component } from "react";
import "./Footer.css"

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <h3>Copyrigth &copy;2024 Develope by {this.props.nama}</h3>
                <span>Make with &#10084</span>
            </footer>
        );
    }
}

export default Footer;