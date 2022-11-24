import React from 'react'
import { Link } from 'react-router-dom'

export default function bar() {
  return (
    <div id="nb">
        <bar  expand="lg" bg="light" sticky="top">
            <Link className='-link' to="/">
                <div>
                    <h1>ECOMMERCE</h1>
                </div>
            </Link>
            <ul class="bar- ml-auto item-indent">
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
                    <Link to="/Barbells">
                        <div >
                            <h2>BARBELLS</h2>
                        </div>
                    </Link>
                </li>
            </ul>

        </bar>
    </div>
  )
}
