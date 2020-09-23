import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import TickerBar from '../components/TickerBar/TickerBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import IndexSummary from '../components/IndexSummary/IndexSummary';

function Homepage() {
  return (
    <>
      <NavBar />
      <TickerBar />
      <Container fluid className="bg-light pt-3">
        <Container>
          <IndexSummary />
          <Row className="pt-4">
            <Col sm={8} className="border border-primary">
              Main
            </Col>
            <Col sm={4} className="border border-danger">
              Righ-Side
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Homepage;
