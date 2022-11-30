import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/default.png";

const styles = {
  pic: {
    height: "200px",
    // padding: "0",
    // margin: "0",
    // top: "0",
    // left: "0",
    // transform: "translateY(-15%)"
  },
};

export default function bar() {
  return (
    <nav className="navbar navbar-expand-lg py-0 navbar-dark bg-dark static-top">
      <div className="container">
        <Link to="/Home">
          <img className="d-inline-block align-middle mr-2" style={styles.pic} src={logo} alt="Company logo" />
        </Link>
        <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto text-center">

            <li className="nav-item">
              <Link className="link-to" to="/Treadmills">TREADMILLS</Link>
            </li>

            <li className="nav-item">
              <Link className="link-to" to="/Bikes">BIKES</Link>
            </li>

            <li className="nav-item">
              <Link className="link-to" to="/Shoes">SHOES</Link>
            </li>

            <li className="nav-item">
              <Link className="link-to" to="/Contactus">CONTACT US</Link>
            </li>

            <li className="nav-item active">
              <Link className="link-to" to="/LOGIN">LOGIN/SIGN UP</Link>
            </li>
            


            <li className="nav-item active">
              <Link className="link-to" to="/Cart">Shopping Cart</Link>
            </li>
          
           
          </ul>
        </div>
      </div>
    </nav>
  );
}
