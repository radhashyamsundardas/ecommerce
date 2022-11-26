import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Product() {
  return (


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,h_280,q_auto:good/https://s3.amazonaws.com/peloton-production-catalog/d623cf4dd6744b72ba3081140cddb01e_1647539088760.png" height={200}/>
      <Card.Body>
        <Card.Title>Peloton Bike</Card.Title>
        <Card.Text>
        The Peloton bike brings you the most convenient and immersive indoor cycling experience, streaming daily live classes from our NYC studio directly into your home. You'll have 24-hour access to studio cycling classes available to your entire household.
        </Card.Text>
        <Button variant="primary">ADD TO CART</Button>
      </Card.Body>
    </Card>
  );
}  


export default Product
