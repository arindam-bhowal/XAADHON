import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <Link to="/" className="logoHeader">
          XAADHON
        </Link>
      </div>
      <div className="right">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkBtn">
          <i className="fa fa-bars" />
        </label>
        <ul className="list">
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/notes">Notes</Link>
          </li>
          <li>
            <Link to="/questionPapers">Question Paper</Link>
          </li>
          <li>
            <Link to="/comingSoon">Books</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
