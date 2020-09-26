import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Articles from '../components/Articles/Articles';
import RightSide from '../components/RightSide/RightSide';

function Homepage() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 990);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 990);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <div className="bg-light">
      <Container fluid="lg">
        {isDesktop ? (
          <Row className="pt-4">
            <Col lg={8}>
              <Articles />
            </Col>
            <Col lg={4} className="px-1">
              <RightSide />
            </Col>
          </Row>
        ) : (
          <Articles className="pt-4" />
        )}
      </Container>
    </div>
  );
}

export default Homepage;
