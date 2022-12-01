import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/default.png";
import shopcart from "../imgs/shopping-cart.png"

const styles = {
  logopic: {
    height: "220px",
    transform: "translateX(-15%)",
  },
  cartpic: {
    height: '20px',
  }
};

export default function bar() {
  return (
    <nav className="navbar navbar-expand-lg py-0 navbar-light bg-light static-top">
      <div className="container">
        <Link to="/">
          <img
            className="d-inline-block align-middle mr-2"
            style={styles.logopic}
            src={logo}
            alt="Company logo"
          />
        </Link>
        <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto text-center">
            <li className="nav-item">
              <Link className="link-to" to="/Treadmills">
                TREADMILLS
              </Link>
            </li>

            <li className="nav-item">
              <Link className="link-to" to="/Bikes">
                BIKES
              </Link>
            </li>

            <li className="nav-item">
              <Link className="link-to" to="/Shoes">
                LIFTING EQUIPMENT
              </Link>
            </li>

            <li className="nav-item">
              <Link className="link-to" to="/Contactus">
                CONTACT US
              </Link>
            </li>

            <li className="nav-item active">
              <Link className="link-to" to="/LOGIN">
                LOGIN/SIGN UP
              </Link>
            </li>

            <li className="nav-item active">
              <Link className="link-to" to="/Cart">
                <img src= {shopcart} style= {styles.cartpic}/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
