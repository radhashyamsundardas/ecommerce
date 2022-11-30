import React from "react";
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

function Shoes() {
  return (
    <div>
      <div className="card-container">
        <Card style={style.body}>
          <Card.Img
            variant="top"
            src="https://www.titan.fitness/dw/image/v2/BDBZ_PRD/on/demandware.static/-/Sites-masterCatalog_Titan/default/dw1e3c78b9/images/hi-res/Fitness/401080_01.jpg?sw=800&sh=800"
            height={220}
          />

          <Card.Body>
            <Card.Title>T-2 Series Power Rack</Card.Title>
            {/* <Card.Text>
  </Card.Text> */}
            <h6>
              Was: $420.00
              <br />
              Price: $256.20
              <br />
              You Save: $163.80 (39%)
            </h6>

            <Button variant="primary">ADD TO CART</Button>
          </Card.Body>
        </Card>

        <Card style={style.body}>
          <Card.Img
            variant="top"
            src="https://www.titan.fitness/dw/image/v2/BDBZ_PRD/on/demandware.static/-/Sites-masterCatalog_Titan/default/dw5855a423/images/hi-res/Fitness/CPLATE_01.jpg?sw=800&sh=800"
            height={220}
          />

          <Card.Body>
            <Card.Title>245 LB Set Cast Iron Olympic Plates</Card.Title>
            {/* <Card.Text>
  </Card.Text> */}
            <h6>
              Was: $357.5
              <br />
              Price: $46.18
              <br />
              You Save: $192.50 (35%)
            </h6>

            <Button variant="primary">ADD TO CART</Button>
          </Card.Body>
        </Card>

        <Card style={style.body}>
          <Card.Img
            variant="top"
            src="https://m.media-amazon.com/images/I/61GRX27hm3L._AC_SX522_.jpg"
            height={220}
          />

          <Card.Body>
            <Card.Title>Element Fitness Hack Squat Machine</Card.Title>
            {/* <Card.Text>
  </Card.Text> */}
            <h6>
              Was: $2,969.00
              <br />
              Price: $2,226.75
              <br />
              You Save: $742.25 (25%)
            </h6>

            <Button variant="primary">ADD TO CART</Button>
          </Card.Body>
        </Card>

        <Card style={style.body}>
          <Card.Img
            variant="top"
            src="https://m.media-amazon.com/images/I/61l16I51ZFL._AC_SX522_.jpg"
            height={220}
          />

          <Card.Body>
            <Card.Title>6ft Olympic Barbell</Card.Title>
            {/* <Card.Text>
  </Card.Text> */}
            <h6>
              Was: $89.99
              <br />
              Price: $72.00
              <br />
              You Save: $17.99 (20%)
            </h6>

            <Button variant="primary">ADD TO CART</Button>
          </Card.Body>
        </Card>

        <Card style={style.body}>
          <Card.Img
            variant="top"
            src="https://m.media-amazon.com/images/I/71F32g+1sjL._AC_SX522_.jpg"
            height={220}
          />

          <Card.Body>
            <Card.Title>Cap Barbell 150 LB Dumbbell Set</Card.Title>
            {/* <Card.Text>
  </Card.Text> */}
            <h6>
              Was: $225.00
              <br />
              Price: $218.25
              <br />
              You Save: $06.75 (3%)
            </h6>

            <Button variant="primary">ADD TO CART</Button>
          </Card.Body>
        </Card>

        <Card style={style.body}>
          <Card.Img
            variant="top"
            src="https://m.media-amazon.com/images/I/61V+k4rDzpL._AC_SX522_.jpg"
            height={220}
          />

          <Card.Body>
            <Card.Title>PONE FIRST Adjustable Weight Bench</Card.Title>
            {/* <Card.Text>
  </Card.Text> */}
            <h6>
              Was: $104.99
              <br />
              Price: $96.60
              <br />
              You Save: $8.39 (8%)
            </h6>

            <Button variant="primary">ADD TO CART</Button>
          </Card.Body>
        </Card>

        <Card style={style.body}>
          <Card.Img
            variant="top"
            src="https://m.media-amazon.com/images/I/71at4vNFneL._AC_SX522_.jpg"
            height={220}
          />

          <Card.Body>
            <Card.Title>
              Valor Fitness Adjustable Leg Curl Extension Machine
            </Card.Title>
            {/* <Card.Text>
  </Card.Text> */}
            <h6>
              Was: $445.98
              <br />
              Price: $423.69
              <br />
              You Save: $22.29 (5%)
            </h6>

            <Button variant="primary">ADD TO CART</Button>
          </Card.Body>
        </Card>

        <Card style={style.body}>
          <Card.Img
            variant="top"
            src="https://www.titan.fitness/dw/image/v2/BDBZ_PRD/on/demandware.static/-/Sites-masterCatalog_Titan/default/dw370b1f96/images/hi-res/Fitness/400895_01.jpg?sw=800&sh=800"
            height={220}
          />

          <Card.Body>
            <Card.Title>Titan Plate-loaded Lat Tower</Card.Title>
            {/* <Card.Text>
  </Card.Text> */}
            <h6>
              Was: $579.99
              <br />
              Price: $549.97
              <br />
              You Save: $30.00 (5%)
            </h6>

            <Button variant="primary">ADD TO CART</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Shoes;
