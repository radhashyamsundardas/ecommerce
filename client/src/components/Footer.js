import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../imgs/default.png";

// const styles = {
//   pic: {
//     height: "200px",
//     // padding: "0",
//     // margin: "0",
//     // top: "0",
//     // left: "0",
//     // transform: "translateY(-15%)"
//   },
// };


function Footer() {
  return (
    <footer className="page-footer text-center font-small bg-dark pt-2">
      <div className="container-fluid text-sm-left" >
      
      <div className="row">
        <div className="col">
        <ul>
          <li>SALES ASSISTANCE</li>
          <li>Call us at 888-888-8888</li>
          <li>
            Office Hours:
            <br /> Monday-Friday: 9AM-5PM EST
          </li>
        </ul>
      </div>

      <div className="col">
        <ul>
        <li>CUSTOMER SERVICE</li>
          <li>Power Rack Comparison</li>
          <li>Contact Us</li>
          <li>Warranty</li>
          <li>Return Policy</li>
          <li>Shipping Policy</li>
        </ul>
      </div>

      <div className="col">
        <ul>
        <li>ACCOUNT</li>
          <li>My Account</li>
          <li>Track Order</li>
          <li>Reward Points</li>
          <li>Privacy</li>
        </ul>
      </div>

      <div className="col">
        <ul>
        <li>ABOUT</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>New Product Request</li>
          <li>Financing</li>
        </ul>
      </div>
      </div>
      </div>

      <div className="footer-copyright bg-info text-center py-0">Geogia Tech Students © 2022</div>
    </footer>
  );
}

export default Footer;
