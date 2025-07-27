import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importer les styles Bootstrap
import { Navbar, Container, Nav, NavDropdown , Row ,Col, Card } from 'react-bootstrap'; // Tous les composants nécessaires

function App() {
  return (
    <>
    <div className="App">
   <nav>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3">Something else</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
      <Container className="text-center mb-4">
          <h1>Welcome to My Frontend Portfolio</h1>
          <p>Explore my projects and passion for frontend development.</p>
        </Container>
        
        <Container>
          <Row className="g-4">
            {[1, 2, 3].map((i) => (
              <Col key={i} md={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>Project {i}</Card.Title>
                    <Card.Text>
                      Short description about project {i}. Built with React and passion!
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;