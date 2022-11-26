import React from 'react'
import { Link } from 'react-router-dom'

export default function bar() {
  return (
    <div >
                <div >
                    <h1>ECOMMERCE COMPANY LOGO</h1>
                </div>
            
            <ul id="navbar"class="bar- ml-auto item-indent">
                <li class="-item">
                    <Link to="/Treadmills">
                        <div >
                            <h2>TREADMILLS</h2>
                        </div>
                    </Link>
                </li>

                <li class="-item">
                    <Link to="/Bikes">
                        <div >
                            <h2>BIKES</h2>
                        </div>
                    </Link>
                </li>

                <li class="-item">
                    <Link to="/Shoes">
                        <div >
                            <h2>SHOES</h2>
                        </div>
                    </Link>
                </li>

                <li class="-item">
                    <Link to="/Contactus">
                        <div >
                            <h2>CONTACT US</h2>
                        </div>
                    </Link>
                </li>

                <li class="-item">
                    <Link to="/LOGIN">
                        <div >
                            <h2>LOGIN/SIGN UP</h2>
                        </div>
                    </Link>
                </li>
            </ul>

    </div>
  )
}
