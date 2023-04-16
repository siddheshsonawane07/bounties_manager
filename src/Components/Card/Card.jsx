import { Card, Col, Row, ListGroup, Button } from "react-bootstrap";
import "./Card.css";
export const CardListComponent = () => {
  return (
    <div className="CardComponent">
     
      <Col>
        <Row>
        <h1 className="car-title">💰Your Bounties</h1>
          <Row xs={1} md={2} lg={3} className="g-3 cont-card">
            {Array.from({ length: 6 }).map((_, idx) => (
              <Col className="card-column">
                <Card>
                  <Card.Img variant="top" src="Bounty_Card_img.avif" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Row>
        <Row>
          <h1 className="car-title">💰Ypur Submissions</h1>
          <Row xs={1} md={2} lg={3} className="g-3 cont-card">
            {Array.from({ length: 6 }).map((_, idx) => (
              <Col className="card-column">
                <Card>
                  <Card.Img variant="top" src="Bounty_Card_img.avif" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Row>
        <Row>
          <h1 className="car-title">💰Available Bounties</h1>
          <Row xs={1} md={2} lg={3} className="g-3 cont-card">
            {Array.from({ length: 6 }).map((_, idx) => (
              <Col className="card-column">
                <Card>
                  <Card.Img variant="top" src="Bounty_Card_img.avif" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Row>
      </Col>
    </div>
  );
};



export const CardComponent = ({_title, _desc, _reward, _deadline}) => {
  return (
    <div className="CardComponent">
        <Row>
          <Row xs={1} md={2} lg={3} className="g-3 cont-card">
          
              <Col className="card-column">
                <Card>
                  <Card.Img variant="top" src="Bounty_Card_img.avif" />
                  <Card.Body>
                    <Card.Title>{_title}</Card.Title>
                    <Card.Text>
                      {_desc}
                    </Card.Text>
                    <Card.Text>
                      <b>Reward:</b>{_reward}
                    </Card.Text>
                    <Card.Text>
                      <b>Deadline:</b>{_deadline}
                    </Card.Text>
                    
                  </Card.Body>
                </Card>
              </Col>
          </Row>
        </Row>
    </div>
  );
};
