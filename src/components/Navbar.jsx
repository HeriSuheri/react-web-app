import "../styles/Navbar.css";
import { pathNameCONFIG } from "../config";

function Navbar() {
  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <a href="">Coding Mania</a>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#courses">Courses</a>
            </li>
            <li>
              <a href="#tutors">Tutors</a>
            </li>
            <li>
              <a href="#partners">Partners</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href={pathNameCONFIG.LOGIN} className="tbl-biru">
                Log In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
