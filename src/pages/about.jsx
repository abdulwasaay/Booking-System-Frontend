
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

export const  About= ()=> {
  return (
    <Container className="main_divider">
      <Row>
        <Col>
          <h1 className="headings" >About Us</h1>
          <p className='detail'>
            Welcome to our online booking system! We offer three main services - Flights, Hotels, and Buses. 
            Our mission is to provide you with a seamless and enjoyable booking experience for your travel needs. 
            Whether you're planning a vacation, a business trip, or a family visit, we have you covered.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="headings">Our Services</h2>
          <p className="detail">
            <strong>Flights:</strong> Book flights to your desired destination at the best prices. We partner with major airlines to offer you a wide range of options.
          </p>
          <p className="detail">
            <strong>Hotels:</strong> Find comfortable and affordable accommodation at top hotels. We have partnerships with hotels around the world to ensure your stay is pleasant.
          </p>
          <p className="detail">
            <strong>Buses:</strong> Book bus tickets for local or long-distance travel. We collaborate with reliable bus operators to make your journey hassle-free.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="headings">Our Team</h2>
          <p className="detail">
            We are a team of dedicated developers passionate about creating innovative solutions for travel enthusiasts. 
            Our expertise in web development and user experience design enables us to deliver a high-quality booking platform.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

