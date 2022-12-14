
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const style = {
  body: {
    width: "18rem",
    height: "28rem",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
};



function Product() {
  return (
    <div>
      <div className="top-card">EXCERCISE BIKES</div>

      <div className="card-container">


        <Card style={style.body}>
          <Card.Img
            variant="top"
            src="https://staticprod.site.flexispot.com/cdn-cgi/image/dpr=1,format=webp,fit=pad/https://staticprod.site.flexispot.com/flexispot/catalog/product/v/9/v91207.jpg"
            height={200}
          />

          <Card.Body>
            <Card.Title>Home office All-in-One</Card.Title>
            {/* <Card.Text>
  </Card.Text> */}
            <h6>
              Was: $499.00
              <br />
              Price: $369.98
              <br />
              You Save: $130.00 (22%)
            </h6>

            <a target="_blank" href="https://flexispot.ph/product/all-in-one-desk-bike-deskcise-pro-v9/"> <Button variant="primary">ADD TO CART</Button></a>
          </Card.Body>
        </Card>
        <Card style={style.body}>
        <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0592/3766/2905/products/sku_-cyber-monday-extended-P4_1000x.png?v=1669795124" height={220} />
        <Card.Body>
          <Card.Title>Lit Bike Aurora Pink</Card.Title>
          {/* <Card.Text>
  </Card.Text> */}
          <h6>Was:  $1799.00<br />
            Price:  $1049.98<br />
            You Save: $749.00 (40%)</h6>
          <a target="_blank" href="https://www.freebeatfit.com/products/lit-bike-klarna-limited-edition"><Button variant="primary">ADD TO CART</Button></a>
        </Card.Body>
      </Card>

        <Card style={style.body}>
          <Card.Img
            variant="top"
            src="https://cdn.shopify.com/s/files/1/0449/8453/3153/products/whitebike_900x.jpg?v=1637667138"
            height={220}
          />

          <Card.Body>
            <Card.Title>IFAST Magnetic Silent Stationary Bike</Card.Title>
            {/* <Card.Text>

  </Card.Text> */}
          <h6>Was:  $369.00<br />
            Price:  $309.00<br />
            You Save: $50.00 (15%)</h6>
          <Button variant="primary">ADD TO CART</Button>
        </Card.Body>
      </Card>
      <Card style={style.body}>
        <Card.Img variant="top" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTz7r5BdEyPYcIMgtYyM2TnfEd-OoG3lxss4OZusRBPQCGy0XJ8qiswaSsjgtch_uxIigp9bq8nM4XPXMMT6cXMXionni40blH0&usqp=CAc" height={220} />
        <Card.Body>
          <Card.Title>Peloton Bike</Card.Title>
          <Card.Text>
            Finance starting from 0% APR?? with $0 down.
          </Card.Text>
          <h6>Price:  $1445.00</h6>
          <Button variant="primary">ADD TO CART</Button>
        </Card.Body>
      </Card>
      <Card style={style.body}>
        <Card.Img variant="top" src="https://www.relifesports.com/wp-content/uploads/2021/09/best-home-exercise-bike-3.jpg" height={220} />
        <Card.Body>
          <Card.Title>RELIFE 3 in 1 Exercise Bike</Card.Title>
          {/* <Card.Text>
  </Card.Text> */}
          <h6>Was:  $249.99<br />
            Price:  $219.99<br />
            You Save: $30.00 (15%)</h6>
          <Button variant="primary">ADD TO CART</Button>
        </Card.Body>
      </Card>
      <Card style={style.body}>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71fzMIEqzSL._AC_SX679_.jpg" height={220} />
        <Card.Body>
          <Card.Title>SEGMART Electric Bike</Card.Title>
          {/* <Card.Text>
  </Card.Text> */}
          <h6>Was:  $439.99<br />
            Price:  $199.00<br />
            You Save: $239.00 (55%)</h6>
          <Button variant="primary">ADD TO CART</Button>
        </Card.Body>
      </Card>
      <Card style={style.body}>
        <Card.Img variant="top" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRkTJa5gls2AYKZmS-A3PHAA798uguZ6kotMkAgUM4tmaNqf2wPtQ7fVLSxSh0S5vrQLVxmygRdxyKbef_6ORDWoKLxCawpbgsRmeELBRc0xaD-HRwXdHTttxeYuGWU&usqp=CAE" height={220} />
        <Card.Body>
          <Card.Title>Exercise Stationary Bike 330Lbs Weight Capacity</Card.Title>
          {/* <Card.Text>
  </Card.Text> */}
          <h6>
            Price:  $219.00</h6>
          <Button variant="primary">ADD TO CART</Button>
        </Card.Body>
      </Card>
      <Card style={style.body}>
        <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0582/1199/1684/products/G1Max180_1080x.png?v=1664174413" height={220} />
        <Card.Body>
          <Card.Title>Yesoul G1 Elephant 32??? HD Bike</Card.Title>
          {/* <Card.Text>
  </Card.Text> */}
          <h6>Was:  $999.00<br />
            Price:  $699.98<br />
            You Save: $299.00 (30%)</h6>
          <Button variant="primary">ADD TO CART</Button>
        </Card.Body>
      </Card>
    </div>
    </div>
  );
}
  export default Product;
