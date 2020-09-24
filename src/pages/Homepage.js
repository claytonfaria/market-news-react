import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import TickerBar from '../components/TickerBar/TickerBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Articles from '../components/Articles/Articles';

function Homepage() {
  return (
    <>
      <NavBar />
      <TickerBar />
      <Container fluid className="bg-light pt-3">
        <div className="container-lg">
          <Row className="pt-4">
            <Col lg={8}>
              <Articles />
            </Col>
            <Col lg={4} className="border border-danger d-none d-lg-block">
              Righ-Side
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Homepage;
