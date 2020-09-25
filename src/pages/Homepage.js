import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import TickerBar from '../components/TickerBar/TickerBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Articles from '../components/Articles/Articles';
import RightSide from '../components/RightSide/RightSide';
import Footer from '../components/Footer/Footer';

function Homepage() {
  return (
    <div className="bg-light">
      <NavBar />
      <TickerBar />
      <Container fluid="lg">
        <Row className="pt-4">
          <Col lg={8}>
            <Articles />
          </Col>
          <Col lg={4} className=" d-none d-lg-block px-1">
            <RightSide />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Homepage;
