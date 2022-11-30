import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export default function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        width: 500,
        border: "solid black 2px",
        aspectRatio: 7 / 5,
        borderRadius: 5,
        margin: "auto",
        marginTop: 50,
        marginBottom: 50,
      }}
    >
      <h4>Deals of the week</h4>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://totalbodyexperts.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/_/5_2.png"
            height={400}
            alt="Image One"
          />
          {/* <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/71MHeFRk30L._AC_SX679_.jpg"
            height={400}
            alt="Image Two"
          />
          {/* <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/71Ii1NiUdIL._AC_SX679_.jpg"
            height={400}
            alt="Image One"
          />
          {/* <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/41rG5yj0hoL._AC_SX679_.jpg"
            height={400}
            alt="Image One"
          />
          {/* <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTZx9OMYz8NJZ0P8wHHWccWpapimO6rmOz6S6D1FYz6GCjVsqx3VnTIbuuHlJviK-ju2dDcdy6kCjwhBOdZZ31P5ftxhmwWzgIUgo22k5U&usqp=CAE"
            height={400}
            alt="Image One"
          />
          {/* <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
