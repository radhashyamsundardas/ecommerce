import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function home() {
  return (
    <div id="home">
      <h2>DEALS OF THE WEEK</h2>

      <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://res.cloudinary.com/iconfitness/image/upload/w_690,h_459,c_fill,ar_230:153,dpr_1,f_auto,q_auto/v1/site--15/jan21-NETL71420_gallery_2_lg-v2.jpg" height={200}/>
    <Card.Body>
      <Card.Title>Commercial 14.9</Card.Title>
      <Card.Text>
    
ON-DEMAND STUDIO WORKOUTS

Enjoy thousands of high-energy studio classes whenever you want them, day or night. Your machine will automatically adjust incline and resistance based on trainer cues.
TIME TO ESCAPE & EXPLORE

Experience global sights as our coaches digitally adjust your resistance and incline to match theirs for the best workout of your life.
      </Card.Text>
      <h3>$1,599</h3>
      <h4>0% APR FOR 12 MONTHS†</h4>
      <Button variant="primary">ADD TO CART</Button>
    </Card.Body>
  </Card>


  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://i5.walmartimages.com/asr/62a2765d-079e-431a-9de7-de8823da27eb.927e82239416c48ef464e48bddec8f67.jpeg" height={200}/>
    <Card.Body>
      <Card.Title>FitRx SmartBell Gym, 60lb 4-in-1 Portable Interchangeable Dumbbell, Barbell, and Kettlebell Set with Adjustable Weights,</Card.Title>
      <Card.Text>

4-in-1 interchangeable weight system can be used as a barbell, kettlebell, two dumbbells, or push-up handles
Various weights totaling 60lbs
Customizable weight configurations for each piece of equipment
Versatile and space-conscious design
Slip-resistant push-up handles
Padded barbell connector
Comfortable textured dumbbell grip
      </Card.Text>
      <h3>$89.00</h3>
      <Button variant="primary">ADD TO CART</Button>
    </Card.Body>
  </Card>

      
    </div>
);
}



 export default home


