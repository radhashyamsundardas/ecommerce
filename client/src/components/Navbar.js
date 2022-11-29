import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/default.png";

const styles = {
  pic: {
    width: "200px",
    left: "5",
  },
};

export default function bar() {
  return (
    <header>
      <ul id="navbar" class="bar- ml-auto item-indent">
        <img style={styles.pic} src={logo} alt="Company logo" />
        <li class="-item">
          <Link to="/Home">
            <img
              src="https://www.freeiconspng.com/uploads/yellow-house-clip-art-png-20.png"
              height={20}
            ></img>
          </Link>
        </li>
        <li class="-item">
          <Link to="/Treadmills">TREADMILLS</Link>
        </li>

        <li class="-item">
          <Link to="/Bikes">BIKES</Link>
        </li>

        <li class="-item">
          <Link to="/Shoes">SHOES</Link>
        </li>

        <li class="-item">
          <Link to="/Contactus">CONTACT US</Link>
        </li>

        <li class="-item">
          <Link to="/LOGIN">LOGIN/SIGN UP</Link>
        </li>
      </ul>
    </header>
  );
}
