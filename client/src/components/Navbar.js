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
                    <Link to="/Aboutus">
                        <div >
                            <h2>About US</h2>
                        </div>
                    </Link>
                </li>

                <li class="-item">
                    <Link to="/Product">
                        <div >
                            <h2>Products</h2>
                        </div>
                    </Link>
                </li>

                <li class="-item">
                    <Link to="/Contactus">
                        <div >
                            <h2>Contact US</h2>
                        </div>
                    </Link>
                </li>

                <li class="-item">
                    <Link to="/LOGIN/SIGNUP">
                        <div >
                            <h2>LOGIN/SIGN UP</h2>
                        </div>
                    </Link>
                </li>
            </ul>

    </div>
  )
}
