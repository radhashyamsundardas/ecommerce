import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='footer-bg-light fixed-bottom'>
     <div >
            
            <ul>
                <li class="-item">
                    <Link to="/SalesAssitance">
                        <div >
                            <h2>SALES ASSISTANCE</h2>
                            <ul>
                              <li>Call us at 888-888-8888</li>
                              <li>Office Hours: <br/> Monday - Friday: 9AM -5PM EST</li>
                            </ul>
                        </div>
                    </Link>
                </li>

                <li class="-item">
                    <Link to="/CustomerService">
                        <div >
                            <h2>CUSTOMER SERVICE</h2>
                            <ul>
                              <li>Power Rack Comparison</li>
                              <li>Contact Us</li>
                              <li>Warranty</li>
                              <li>Return Policy</li>
                              <li>Shipping Policy</li>

                            </ul>
                        </div>
                    </Link>
                </li>

                <li class="-item">
                    <Link to="/Account">
                        <div >
                            <h2>ACCOUNT</h2>
                            <ul>
                              <li>My Account</li>
                              <li>Track Order</li>
                              <li>Reward Points</li>
                              <li>Privacy</li>
                            </ul>
                        </div>
                    </Link>
                </li>

                <li class="-item">
                    <Link to="/About">
                        <div >
                            <h2>ABOUT</h2>
                            <ul>
                              <li>About Us</li>
                              <li>Careers</li>
                              <li>New Product Request</li>
                              <li>Financing</li>
                            </ul>
                        </div>
                    </Link>
                </li>
            </ul>
            <h3>2022 Geogia Tech Students. All Rights Reserved</h3>
    </div>
</footer>
  )
}

export default Footer