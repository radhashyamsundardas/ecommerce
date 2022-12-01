import React from "react";
import {
  MDBIcon,
  
} from "mdb-react-ui-kit";


function Footer() {
  return (
    <footer className="page-footer text-center font-md bg-dark pt-2">
      <div className="container-fluid text-sm-left" >
      
      <div className="row">
        <div className="col">
        <ul>
          <li style={{textDecoration:"underline"}}>SALES ASSISTANCE</li>
          <li>Call us at 888-888-8888</li>
          <li>
            Office Hours:
            <br /> Monday-Friday: 9AM-5PM EST
          </li>
        </ul>
      </div>

      <div className="col">
        <ul>
        <li style={{textDecoration:"underline"}}>CUSTOMER SERVICE</li>
          <li>Power Rack Comparison</li>
          <li>Contact Us</li>
          <li>Warranty</li>
          <li>Return Policy</li>
          <li>Shipping Policy</li>
        </ul>
      </div>

      <div className="col">
        <ul>
        <li style={{textDecoration:"underline"}}>ACCOUNT</li>
          <li>My Account</li>
          <li>Track Order</li>
          <li>Reward Points</li>
          <li>Privacy</li>
        </ul>
      </div>

      <div className="col">
        <ul>
        <li style={{textDecoration:"underline"}}>ABOUT</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>New Product Request</li>
          <li>Financing</li>
        </ul>
      </div>
      </div>
      </div>
      <div className="media">
        <img src="https://seeklogo.com/images/I/instagram-new-2016-logo-4773FE3F99-seeklogo.com.png" style={{height:'30px'}}/>
        <img src="https://seeklogo.com/images/F/facebook-icon-logo-03865A9BA2-seeklogo.com.png" style={{height:'30px'}}/>
        <img src="https://seeklogo.com/images/T/twitter-icon-circle-blue-logo-94339974C6-seeklogo.com.png" style={{height:'30px'}}/>
        <img src="https://seeklogo.com/images/Y/youtube-2017-icon-logo-D1FE045118-seeklogo.com.png" style={{height:'30px'}}/>
        </div>
      <div className="footer-copyright bg-info text-center py-0">Geogia Tech Students © 2022</div>
    </footer>
  );
}

export default Footer;
