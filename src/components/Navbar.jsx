import logo from "../image/logo.png"
import "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="" />
      </div>
      <div className="nav-items">
        <span><Link to="/" className="nav-links">Art </Link></span>
        <span><Link to="/" className="nav-links"> Science</Link></span>
        <span><Link to="/" className="nav-links"> Technology</Link></span>
        <span><Link to="/" className="nav-links"> Foods</Link></span>
        <span><Link to="/" className="nav-links"> </Link></span>
      </div>
      <div className="navbar-right">
      <Link to="/write" className="nav-links">
        <button className="nav-add">
       write
        </button></Link>
        <Link  className="nav-links">
        <button className="nav-btn">
         Logout
        </button>
        </Link>

      </div>
    </div>
  )
}

export default Navbar