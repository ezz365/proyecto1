import CartWidget from "../CartWidget.js";
import "./style.css";

const NavBar = ({saludo}) => {

    return (
        <main>
            <CartWidget />
            <nav className="navbar-container">NavBar</nav>
        </main>
    );
};



export default NavBar;

