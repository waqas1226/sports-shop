import '../CSSfiles/Footer.css';

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => (
  <footer>
    <Container>
      <Row>
        <Col xs={12} sm={4}>
          <h5>Contact Us</h5>
          <ul>
            <li>Email: info@ecommercewebsite.com</li>
            <li>Phone: 555-555-5555</li>
          </ul>
        </Col>
        <Col xs={12} sm={4}>
          <h5>Links</h5>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </Col>
        <Col xs={12} sm={4}>
          <h5>Follow Us</h5>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <p>Copyright © {new Date().getFullYear()} Ecommerce Website</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;


