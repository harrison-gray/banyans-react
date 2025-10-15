import { Container, Navbar, Nav, Button, Image } from 'react-bootstrap';

export default function TopMenu() {
  return (
    <Navbar expand="lg" bg="light" className="fixed-top">
      <Container>
        <Navbar.Brand href="#">
          <Image
            src="https://courses.ics.hawaii.edu/ics314f25/morea/ui-frameworks/wod-banyans-logo.png"
            width={220}
            alt="Craft Kitchen + Lounge Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ms-auto">
            <Nav.Link><u>Home</u></Nav.Link>
            <Nav.Link>Banyans Menu</Nav.Link>
            <Nav.Link>Reservations</Nav.Link>
            <Nav.Link>Events</Nav.Link>
            <Nav.Link>Gift Cards</Nav.Link>
            <Nav.Link><i className="bi bi-instagram"></i></Nav.Link>
            <Nav.Link><i className="bi bi-facebook"></i></Nav.Link>
            <Nav.Link><i className="bi bi-twitter-x"></i></Nav.Link>
            <Nav.Link><i className="bi bi-tiktok"></i></Nav.Link>
            <Nav.Link>
              <Button variant="light">
                English <i className="bi bi-caret-down"></i>
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
