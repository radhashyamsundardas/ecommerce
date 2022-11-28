import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div class="-item">
        <Link to="/SalesAssitance">SALES ASSISTANCE</Link>
        <ul>
          <li>Call us at 888-888-8888</li>

          <li>
            Office Hours:
            <br /> Monday-Friday: 9AM-5PM EST
          </li>
        </ul>
      </div>

      <div class="-item">
        <Link to="/CustomerService">CUSTOMER SERVICE</Link>
        <ul>
          <li>Power Rack Comparison</li>
          <li>Contact Us</li>
          <li>Warranty</li>
          <li>Return Policy</li>
          <li>Shipping Policy</li>
        </ul>
      </div>

      <div class="-item">
        <Link to="/Account">ACCOUNT</Link>
        <ul>
          <li>My Account</li>
          <li>Track Order</li>
          <li>Reward Points</li>
          <li>Privacy</li>
        </ul>
      </div>

      <div class="-item">
        <Link to="/About">ABOUT</Link>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>New Product Request</li>
          <li>Financing</li>
        </ul>
      </div>

      <span>Geogia Tech Students © 2022</span>
    </footer>
  );
}

export default Footer;
