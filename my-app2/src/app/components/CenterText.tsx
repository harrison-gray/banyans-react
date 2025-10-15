import { Row, Col } from 'react-bootstrap';

export default function CenterText() {
  return (
    <Row id="centerText" className="justify-content-center align-content-center">
      <Col className="text-center">
        <h1>GLOBALLY INSPIRED,</h1>
        <h1>LOCALLY SOURCED</h1>
        <h3>A global fusion menu meets culinary creativity at Banyans Craft Kitchen + Lounge in Kailua.</h3>
        <h5>Live Music Fridays & Saturdays</h5>
      </Col>
    </Row>
  );
}