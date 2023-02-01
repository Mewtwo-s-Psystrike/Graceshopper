import React, { useState, useEffect } from 'react';
import { ListGroup, Tabs, Tab, Container, Col, Row, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getCart } from '../api/api';

const Cart = ({ jwt, products, navigate }) => {


  const [cartProducts, setCartProducts] = useState([]);


  async function allCartProducts() {
    setCartProducts(await getCart(jwt));
  }

  useEffect(() => {
    if (jwt) {
      allCartProducts();
    }
  }, [jwt]);

  return (
    <>
      <Container>
        <ListGroup>
          <Row>
            
            <Col>Vehicle: 2023 Blue Tesla Model S Plaid </Col>
            <Col>Price: $114,990</Col>
          </Row>
          <Row>
            <Col>Vehicle: 2023 White Tesla Model Y Long-Range</Col>
            <Col>Price: $53,490</Col>
          </Row>

          <Row>Subtotal: $168,480 </Row>
          <Row>Sales Tax (7%): $ 11,793.60</Row>
          <Row>Total Price: $ 180,273.60</Row>
                <Row>
                  <Button variant="light"
                    onClick={(e) => {window.location.assign("/checkout");}}>
                    Checkout
                  </Button>
                  </Row>
        </ListGroup>
      </Container>
    </>
  );
};

export default Cart;