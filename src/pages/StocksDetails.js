import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SymbolOverview from '../components/TradingViewWidgets/SymbolOverview';
import CompanyProfile from '../components/TradingViewWidgets/CompanyProfile';
import FundamentalData from '../components/TradingViewWidgets/FundamentalData';
import AdvancedChart from '../components/TradingViewWidgets/AdvancedChart';

function StocksDetails({ updateSymbol, setUpdateSymbol }) {
  let { id } = useParams();

  useEffect(() => {
    // Set it to false after receiving new id from useParams(from Navbar)
    setUpdateSymbol(false);
    // eslint-disable-next-line
  }, [id]);

  return (
    <>
      {!updateSymbol && id && (
        <div className="bg-light">
          <Container fluid="lg">
            <main>
              <SymbolOverview ticker={id} />
              <Tabs defaultActiveKey="profile">
                <Tab eventKey="profile" title="Profile">
                  <Row noGutters={true} className="pb-3">
                    <Col lg={6}>
                      <CompanyProfile ticker={id} />
                    </Col>
                    <Col lg={6}>
                      <FundamentalData ticker={id} />
                    </Col>
                  </Row>
                </Tab>
                <Tab eventKey="chart" title="Advanced Chart">
                  <AdvancedChart ticker={id} />
                </Tab>
              </Tabs>
            </main>
          </Container>
        </div>
      )}
    </>
  );
}

export default StocksDetails;
