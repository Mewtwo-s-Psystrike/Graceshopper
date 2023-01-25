import React, { useState, useEffect } from 'react';
import { ListGroup, Tabs, Tab, Container, Col, Row, Button, Card } from 'react-bootstrap';
import { getCart } from '../api/api'

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
            <Col id='cartbooks'>
              {cartProducts ? (
                cartProducts.map((product) => {
                  return <CartItemCard jwt={jwt} products={products} product={product} key={product.id} />
                })
              ) : (
                <span style={{ fontSize: '60px' }}>Shopping Cart is empty</span>
              )}
            </Col>
            <Col id='checkoutcard'>
              <div>
                <Row>
                  <Button variant="light"
                    onClick={(e) => { e.preventDefault(); navigate('/checkout') }}>
                    Checkout
                  </Button>
                </Row>

              </div>
            </Col>
          </Row>
        </ListGroup>
      </Container>
    </>
  );
};

export default Cart;