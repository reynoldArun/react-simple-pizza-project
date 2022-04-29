import { Link } from "react-router-dom";

import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1 className="navbar__heading">PIZZA CORNER</h1>
      </Link>
      <div className="navbar__links">
        <Link to="/login">
          <button className="navbar__item">Login</button>
        </Link>
        <Link to="/register">
          <button className="navbar__item">Register</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
