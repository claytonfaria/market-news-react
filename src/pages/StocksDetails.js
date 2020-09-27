import React from 'react';
import { useParams } from 'react-router-dom';
import { TradingViewEmbed, widgetType } from 'react-tradingview-embed';
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function StocksDetails() {
  let { id } = useParams();

  return (
    <>
      <div className="bg-light">
        <Container fluid="lg">
          <main>
            <section
              className="py-4"
              style={{
                width: '100%',
                height: '400px',
              }}
            >
              <TradingViewEmbed
                widgetType={widgetType.SYMBOL_OVERVIEW}
                widgetConfig={{
                  colorTheme: 'light',
                  autosize: true,
                  symbols: [`${id}`],
                  largeChartUrl:
                    window.location.origin + '/{tvexchange}:{tvsymbol}',
                }}
                copyrightLink={false}
              />
            </section>
            <Tabs defaultActiveKey="profile">
              <Tab eventKey="profile" title="Company Profile">
                <Row noGutters={true} className="pb-3">
                  <Col lg={6}>
                    <section
                      style={{
                        width: '100%',
                        height: '800px',
                      }}
                    >
                      <TradingViewEmbed
                        widgetType={widgetType.COMPANY_PROFILE}
                        widgetConfig={{
                          colorTheme: 'light',
                          autosize: true,
                          symbol: `${id}`,
                          largeChartUrl:
                            window.location.origin + '/{tvexchange}:{tvsymbol}',
                        }}
                        copyrightLink={false}
                      />
                    </section>
                  </Col>
                  <Col lg={6}>
                    <section
                      style={{
                        width: '100%',
                        height: '800px',
                      }}
                    >
                      <TradingViewEmbed
                        widgetType={widgetType.FUNDAMENTAL_DATA}
                        widgetConfig={{
                          colorTheme: 'light',
                          autosize: true,
                          symbol: `${id}`,
                          largeChartUrl:
                            window.location.origin + '{tvexchange}:{tvsymbol}',
                        }}
                        copyrightLink={false}
                      />
                    </section>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="chart" title="Advanced Chart">
                <section
                  style={{
                    width: '100%',
                    height: '610px',
                    maxHeight: '80vh',
                  }}
                >
                  <TradingViewEmbed
                    widgetType={widgetType.ADVANCED_CHART}
                    widgetConfig={{
                      colorTheme: 'light',
                      autosize: true,
                      symbol: `${id}`,
                      largeChartUrl:
                        window.location.href + '{tvexchange}:{tvsymbol}',
                    }}
                    copyrightLink={false}
                  />
                </section>
              </Tab>
            </Tabs>
          </main>
        </Container>
      </div>
    </>
  );
}

export default StocksDetails;
