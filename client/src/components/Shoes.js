import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Shoes() {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://dks.scene7.com/is/image/GolfGalaxy/DX2347100_DX2347100-WhiteOrangeBlue_TOP?wid=2000&fmt=pjpeg" height={200}/>
    <Card.Body>
      <Card.Title>Nike Men's Air Max 270 Shoes</Card.Title>
      <Card.Text>
      Made with the first-ever Max Air unit created for Nike Sportswear, the Nike Air Max 270 elevates your look and creates cushioned comfort with every step you take.
      </Card.Text>
      <Button variant="primary">ADD TO CART</Button>
    </Card.Body>
  </Card>
  )
}

export default Shoes