import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export default function Home() {
  return (
    <div
      style={{
        background: "black",
        color: 'white',
        textAlign: "center",
        height: 500,
        width:700,
        borderRadius: 5,
        margin: "auto",
        paddingTop: 20,
        marginTop: 40,
        marginBottom: 40,
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <h3>Deals of the week</h3>
      <Carousel>
        <Carousel.Item interval={5000}>
          <Link to="/Shoes"><img
          style={{borderRadius: 5, margin: 'auto'}}
            className="d-block w-95"
            src="https://m.media-amazon.com/images/I/61GRX27hm3L._AC_SX522_.jpg"
            height={400}
            alt=" random one"
          /></Link>
          {/* <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={5000}>
        <Link to="/Shoes"> <img
          style={{borderRadius: 5, margin: 'auto'}}
            className="d-block w-95"
            src="https://m.media-amazon.com/images/I/61l16I51ZFL._AC_SX522_.jpg"
            height={400}
            alt="random two"
          /></Link>
          {/* <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={5000}>
        <Link to="/Bikes"><img
          style={{borderRadius: 5, margin: 'auto'}}
            className="d-block w-95"
            src="https://cdn.shopify.com/s/files/1/0582/1199/1684/products/G1Max180_1080x.png?v=1664174413"
            height={400}
            alt="randomthree"
          /></Link>
          {/* <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={5000}>
        <Link to="/Treadmills"><img
          style={{borderRadius: 5, margin: 'auto'}}
            className="d-block w-95"
            src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcREGdoAxg_zjQu5d7kXg0LyO2hhQUI-WM8iBcN0UuTcWxtmsfPtHUDBS9-xS6mSE9bccWLMhwIbReB3W90KAwMiWUkSOuiy4eRvgApyst00LdqtDrueYFKq&usqp=CAE"
            height={400}
            alt="randomfour"
          /></Link>
          {/* <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={5000}>
        <Link to="/Shoes"> <img
          style={{borderRadius: 5, margin: 'auto'}}
            className="d-block w-95"
            src="https://m.media-amazon.com/images/I/71at4vNFneL._AC_SX522_.jpg"
            height={400}
            alt="randomfive"
          /></Link>
          {/* <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
