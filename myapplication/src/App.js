import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Styles Bootstrap
import './index.css'; // Ton fichier CSS personnalisé
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {
  const produits = [
    {
      titre: "Casque Bluetooth Over-Ear",
      description: "Casque audio sans fil avec réduction de bruit active, autonomie de 30h, micro intégré.",
      prix: "89,99 €",
      image: "/casque.jpg"
    },
    {
      titre: "Sac à Dos Recyclé Urban Pack",
      description: "Sac à dos léger en matériaux recyclés, 100 % imperméable.",
      prix: "59,90 €",
      image: "/sac.jpg"
    },
    {
      titre: "Smartwatch Fit+ Series 3",
      description: "Suivi du sommeil, cardio, notifications en temps réel, compatible Android & iOS.",
      prix: "129,00 €",
      image: "/montre.jpg"
    }
  ];

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">My Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/1">watches</NavDropdown.Item>
                <NavDropdown.Item href="#action/2">Headphones</NavDropdown.Item>
                <NavDropdown.Item href="#action/3">Backpacks</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="text-center mt-4">
        <h1>🛍️Welcome to my Store🛍️</h1>
        <p>Discover our new products.</p>
      </Container>

      <Container className="produits mt-5 d-flex flex-wrap justify-content-center gap-4">
  {produits.map((produit, index) => (
    <div className="carte-produit card p-3" key={index} style={{ width: '18rem' }}>
      <img src={produit.image} className="card-img-top" alt={produit.titre} />
      <div className="card-body">
        <h5 className="card-title">{produit.titre}</h5>
        <p className="card-text">{produit.description}</p>
        <p className="card-text fw-bold">{produit.prix}</p>

        {/* Icônes d'action */}
        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-primary">
            <i className="bi bi-cart-plus"></i> Ajouter
          </button>
          <button className="btn btn-outline-danger">
            <i className="bi bi-heart"></i>
          </button>
        </div>
      </div>
    </div>
  ))}
</Container>
 </>
  );
}
export default App;
